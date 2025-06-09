import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CinemaHero = () => {
  const featuredMovie = {
    title: "Дюна: Часть вторая",
    description:
      "Пол Атрейдес объединяется с Чани и фременами, пока находится в поисках мести заговорщикам, которые разрушили его семью.",
    rating: 8.5,
    year: 2024,
    duration: "2ч 46м",
    genres: ["Фантастика", "Драма", "Приключения"],
    backdrop:
      "https://images.unsplash.com/photo-1489599540919-193b62c0ecfa?w=1200",
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${featuredMovie.backdrop})` }}
      />

      {/* Градиент оверлей */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <Badge className="bg-red-600">Новинка</Badge>
            <div className="flex items-center text-yellow-400">
              <Icon name="Star" size={20} className="mr-1" />
              <span className="font-bold text-lg">{featuredMovie.rating}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {featuredMovie.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-300 mb-6">
            <span>{featuredMovie.year}</span>
            <span>{featuredMovie.duration}</span>
            <div className="flex space-x-2">
              {featuredMovie.genres.map((genre) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="border-gray-600 text-gray-300"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {featuredMovie.description}
          </p>

          <div className="flex space-x-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8">
              <Icon name="Play" size={20} className="mr-3" />
              Смотреть
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8"
            >
              <Icon name="Info" size={20} className="mr-3" />
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemaHero;
