-- Migration: skapa movies-tabellen
-- Placeras i: supabase/migrations/20261026120000_create_movies_table.sql

create table if not exists public.movies (
  id             uuid primary key default gen_random_uuid(),
  imdb_id        text unique,
  title          text not null,
  original_title text,
  year           int,
  runtime        int,                          -- minuter
  genres         text[] not null default '{}',
  director       text,
  actors         text[] not null default '{}',
  description    text,
  poster_url     text,                         -- stående affisch (korten)
  backdrop_url   text,                         -- bred bild (hero-banner)
  imdb_rating    numeric(3,1),
  rated          text,                         -- åldersgräns
  language       text[] not null default '{}',

  -- uppspelning
  file_path      text not null,                -- t.ex. /media/filmer/inception.mp4
  subtitles      jsonb not null default '[]',  -- [{"lang":"sv","path":"..."}]

  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

-- Index för sökning och filtrering
create index if not exists movies_title_idx  on public.movies (title);
create index if not exists movies_year_idx   on public.movies (year);
create index if not exists movies_genres_idx on public.movies using gin (genres);

-- Håll updated_at uppdaterad automatiskt
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger movies_set_updated_at
  before update on public.movies
  for each row
  execute function public.set_updated_at();

-- Row Level Security
alter table public.movies enable row level security;

-- Inloggade användare får läsa alla filmer
create policy "Authenticated users can read movies"
  on public.movies
  for select
  to authenticated
  using (true);

-- Inga insert/update/delete-policies: skriv via service role-nyckeln
-- (t.ex. från ditt importscript), som kringgår RLS.