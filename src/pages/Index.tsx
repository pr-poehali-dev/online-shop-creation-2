import { useState } from "react";
import CinemaHeader from "@/components/CinemaHeader";
import CinemaHero from "@/components/CinemaHero";
import MovieGrid from "@/components/MovieGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { Movie, MovieCategory } from "@/types/movie";

// Мок данные фильмов
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Оппенгеймер",
    originalTitle: "Oppenheimer",
    year: 2023,
    duration: 180,
    rating: 8.4,
    genre: ["Драма", "История", "Биография"],
    country: "США",
    director: "Кристофер Нолан",
    actors: ["Киллиан Мерфи", "Эмили Блант", "Роберт Дауни мл."],
    description:
      "История американского физика Роберта Оппенгеймера и его роли в разработке атомной бомбы.",
    poster:
      "https://images.unsplash.com/photo-1489599540919-193b62c0ecfa?w=400",
    quality: "4K",
    isNew: true,
    isTop: true,
    viewCount: 2500000,
  },
  {
    id: 2,
    title: "Джон Уик 4",
    originalTitle: "John Wick: Chapter 4",
    year: 2023,
    duration: 169,
    rating: 7.8,
    genre: ["Боевик", "Триллер", "Криминал"],
    country: "США",
    director: "Чад Стахелски",
    actors: ["Киану Ривз", "Лоуренс Фишберн", "Иэн Макшейн"],
    description:
      "Джон Уик находит способ победить Правление. Но прежде чем заслужить свободу, он должен сразиться с новым врагом.",
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    quality: "FullHD",
    isNew: true,
    viewCount: 3200000,
  },
  {
    id: 3,
    title: "Паразиты",
    originalTitle: "기생충",
    year: 2019,
    duration: 132,
    rating: 8.6,
    genre: ["Триллер", "Драма", "Комедия"],
    country: "Южная Корея",
    director: "Пон Джун-хо",
    actors: ["Сон Кан-хо", "Ли Сон-гюн", "Чо Ё-джон"],
    description:
      "Фильм о социальном неравенстве и классовых различиях в современном обществе.",
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400",
    quality: "FullHD",
    isTop: true,
    viewCount: 4100000,
  },
  {
    id: 4,
    title: "Интерстеллар",
    originalTitle: "Interstellar",
    year: 2014,
    duration: 169,
    rating: 8.7,
    genre: ["Фантастика", "Драма", "Приключения"],
    country: "США",
    director: "Кристофер Нолан",
    actors: ["Мэттью МакКонахи", "Энн Хэтэуэй", "Джессика Честейн"],
    description:
      "Команда исследователей путешествует через червоточину в космосе в попытке обеспечить выживание человечества.",
    poster:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
    quality: "4K",
    isTop: true,
    viewCount: 5800000,
  },
  {
    id: 5,
    title: "Побег из Шоушенка",
    originalTitle: "The Shawshank Redemption",
    year: 1994,
    duration: 142,
    rating: 9.3,
    genre: ["Драма"],
    country: "США",
    director: "Фрэнк Дарабонт",
    actors: ["Тим Роббинс", "Морган Фриман", "Боб Гантон"],
    description:
      "Два заключенных подружились на протяжении многих лет, находя утешение и искупление через добрые дела.",
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
    quality: "HD",
    isTop: true,
    viewCount: 8900000,
  },
  {
    id: 6,
    title: "Барби",
    originalTitle: "Barbie",
    year: 2023,
    duration: 114,
    rating: 7.0,
    genre: ["Комедия", "Фэнтези", "Приключения"],
    country: "США",
    director: "Грета Гервиг",
    actors: ["Марго Робби", "Райан Гослинг", "Америка Феррера"],
    description: "Барби и Кен отправляются в реальный мир в поисках счастья.",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
    quality: "FullHD",
    isNew: true,
    viewCount: 1800000,
  },
];

const categories: MovieCategory[] = [
  { id: "action", name: "Боевики", slug: "action" },
  { id: "drama", name: "Драмы", slug: "drama" },
  { id: "comedy", name: "Комедии", slug: "comedy" },
  { id: "thriller", name: "Триллеры", slug: "thriller" },
  { id: "sci-fi", name: "Фантастика", slug: "sci-fi" },
  { id: "horror", name: "Ужасы", slug: "horror" },
];

const Index = () => {
  const [filteredMovies, setFilteredMovies] = useState(mockMovies);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredMovies(mockMovies);
      return;
    }

    const filtered = mockMovies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.originalTitle?.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some((g) =>
          g.toLowerCase().includes(query.toLowerCase()),
        ) ||
        movie.director.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredMovies(filtered);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);

    if (categoryId === "all") {
      setFilteredMovies(mockMovies);
      return;
    }

    const categoryMap: Record<string, string> = {
      action: "Боевик",
      drama: "Драма",
      comedy: "Комедия",
      thriller: "Триллер",
      "sci-fi": "Фантастика",
      horror: "Ужасы",
    };

    const genreName = categoryMap[categoryId];
    const filtered = mockMovies.filter((movie) =>
      movie.genre.includes(genreName),
    );
    setFilteredMovies(filtered);
  };

  const handlePlay = (movie: Movie) => {
    console.log("Playing movie:", movie.title);
    // Здесь будет логика открытия плеера
  };

  const handleDetails = (movie: Movie) => {
    console.log("Show details for:", movie.title);
    // Здесь будет логика показа детальной информации
  };

  return (
    <div className="min-h-screen bg-black">
      <CinemaHeader onSearch={handleSearch} />

      <CinemaHero />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <MovieGrid
        movies={filteredMovies}
        onPlay={handlePlay}
        onDetails={handleDetails}
        title="Популярные фильмы"
        subtitle="Лучшие фильмы для просмотра онлайн"
      />
    </div>
  );
};

export default Index;
