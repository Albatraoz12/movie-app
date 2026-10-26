import { moviesData } from "@/lib/movies/movies";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "./MovieCard";

const Movies = () => {
  console.log(moviesData);
  return (
    <section>
      <h2>Top 10 Movies</h2>
      {moviesData && moviesData.length > 0 && (
        <Carousel
          opts={{ align: "start", slidesToScroll: "auto", dragFree: true }}
          className="group/carousel relative"
        >
          {/* py-6 ger plats så korten kan skalas upp vid hover utan att klippas */}
          <CarouselContent className="-ml-2 py-6">
            {moviesData.map((movie, index) => (
              <CarouselItem
                key={movie.id}
                className="basis-full pl-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <MovieCard movie={movie} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Pilar inuti karusellen, syns bara vid hover */}
          <CarouselPrevious className="left-2 z-40 opacity-0 transition-opacity group-hover/carousel:opacity-100 disabled:hidden" />
          <CarouselNext className="right-2 z-40 opacity-0 transition-opacity group-hover/carousel:opacity-100 disabled:hidden" />
        </Carousel>
      )}
    </section>
  );
};

export default Movies;
