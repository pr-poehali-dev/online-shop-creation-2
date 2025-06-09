import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

interface MovieGridProps {
  movies: Movie[];
  onPlay: (movie: Movie) => void;
  onDetails: (movie: Movie) => void;
  title?: string;
  subtitle?: string;
}

const MovieGrid = ({
  movies,
  onPlay,
  onDetails,
  title,
  subtitle,
}: MovieGridProps) => {
  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            )}
            {subtitle && <p className="text-xl text-gray-400">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPlay={onPlay}
              onDetails={onDetails}
            />
          ))}
        </div>

        {movies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">Фильмы не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
