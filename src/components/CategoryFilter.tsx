import { Button } from "@/components/ui/button";
import { MovieCategory } from "@/types/movie";

interface CategoryFilterProps {
  categories: MovieCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="bg-gray-900 border-y border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => onCategoryChange("all")}
            className={
              activeCategory === "all"
                ? "bg-red-600 hover:bg-red-700"
                : "border-gray-600 text-gray-300 hover:border-red-500 hover:text-white"
            }
          >
            Все фильмы
          </Button>

          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-red-600 hover:bg-red-700"
                  : "border-gray-600 text-gray-300 hover:border-red-500 hover:text-white"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
