import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type MovieType = {
  id: number;
  title: string;
  year: number;
  director: string;
  genres: string[];
  runtime: number;
  rating: number;
  plot: string;
};

const MovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <Card className="relative mx-auto flex h-full w-full max-w-sm flex-col pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt={movie.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />

      {/* flex-1 gör att headern tar upp all ledig höjd */}
      <CardHeader className="flex-1">
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription>{movie.plot}</CardDescription>
      </CardHeader>

      {/* Footern hamnar alltid längst ned */}
      <CardFooter className="flex flex-row items-center justify-between">
        <Link
          href={`/movies/${movie.id}`}
          className="text-primary hover:underline flex flex-row items-center justify-between gap-1"
        >
          Go to movie <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
