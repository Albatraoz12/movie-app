interface MovieType {
  id: string;
  imdb_id: string | null;
  title: string;
  original_title: string | null;
  year: number | null;
  runtime: number | null;
  genres: string[];
  director: string | null;
  actors: string[];
  description: string | null;
  poster_url: string | null;
  backdrop_url: string | null;
  imdb_rating: number | null;
  rated: string | null;
  language: string[];
  file_path: string;
  subtitles: { lang: string; path: string }[];
  created_at: string;
  updated_at: string;
}
