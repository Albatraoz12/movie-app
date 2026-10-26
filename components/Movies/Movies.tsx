import { moviesData } from "@/lib/movies/movies";
import MovieCard from "./MovieCard";

const Movies = () => {
  console.log(moviesData);
  return (
    <section>
      <h2>Top 10 Movies</h2>
      {moviesData &&
        moviesData.length > 0 &&
        moviesData.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      {/* <MovieCard movie={moviesData} /> */}
    </section>
  );
};

export default Movies;
