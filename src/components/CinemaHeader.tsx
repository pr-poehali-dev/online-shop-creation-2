import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface CinemaHeaderProps {
  onSearch: (query: string) => void;
}

const CinemaHeader = ({ onSearch }: CinemaHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-black shadow-2xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <Icon name="Film" size={24} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">
                <span className="text-red-500">Кино</span>Портал
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium"
              >
                Фильмы
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium"
              >
                Сериалы
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium"
              >
                Новинки
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors font-medium"
              >
                ТОП-100
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск фильмов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-80 pl-12 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-500"
                />
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </form>

            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:border-red-500 hover:text-white"
            >
              <Icon name="User" size={20} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CinemaHeader;
