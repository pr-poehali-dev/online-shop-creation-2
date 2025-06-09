import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onDetails: (movie: Movie) => void;
}

const MovieCard = ({ movie, onPlay, onDetails }: MovieCardProps) => {
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}ч ${mins}м`;
  };

  return (
    <Card className="group bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Оверлей с кнопками */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-3">
              <Button
                onClick={() => onPlay(movie)}
                className="bg-red-600 hover:bg-red-700"
              >
                <Icon name="Play" size={16} className="mr-2" />
                Смотреть
              </Button>
              <Button
                variant="outline"
                onClick={() => onDetails(movie)}
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Icon name="Info" size={16} />
              </Button>
            </div>
          </div>

          {/* Бейджи */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {movie.isNew && <Badge className="bg-red-600">Новинка</Badge>}
            {movie.isTop && <Badge className="bg-yellow-600">ТОП</Badge>}
            <Badge
              variant="secondary"
              className="bg-black bg-opacity-70 text-white"
            >
              {movie.quality}
            </Badge>
          </div>

          {/* Рейтинг */}
          <div className="absolute top-3 right-3">
            <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center">
              <Icon name="Star" size={14} className="text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{movie.rating}</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="font-bold text-white text-lg line-clamp-2 group-hover:text-red-400 transition-colors">
            {movie.title}
          </h3>

          {movie.originalTitle && (
            <p className="text-gray-400 text-sm">{movie.originalTitle}</p>
          )}

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{movie.year}</span>
            <span>{formatDuration(movie.duration)}</span>
          </div>

          <div className="flex flex-wrap gap-1">
            {movie.genre.slice(0, 3).map((g) => (
              <Badge
                key={g}
                variant="outline"
                className="text-xs border-gray-600 text-gray-300"
              >
                {g}
              </Badge>
            ))}
          </div>

          {movie.viewCount && (
            <div className="flex items-center text-xs text-gray-500">
              <Icon name="Eye" size={12} className="mr-1" />
              {movie.viewCount.toLocaleString()} просмотров
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
