import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Cart, { CartItem } from "@/components/Cart";
import { Product } from "@/components/ProductCard";

// Мок данные товаров
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro 128GB",
    price: 89990,
    originalPrice: 99990,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    category: "Смартфоны",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 79990,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    category: "Смартфоны",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 3,
    name: "MacBook Air M2 13 дюймов",
    price: 119990,
    originalPrice: 129990,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "Ноутбуки",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 4,
    name: "Sony WH-1000XM4 Наушники",
    price: 24990,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "Аудио",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 5,
    name: "iPad Pro 11 дюймов",
    price: 69990,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    category: "Планшеты",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: 39990,
    originalPrice: 44990,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    category: "Часы",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 7,
    name: "Nintendo Switch OLED",
    price: 34990,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "Игры",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 8,
    name: "Dyson V15 Detect Пылесос",
    price: 49990,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
    category: "Бытовая техника",
    rating: 4.4,
    inStock: true,
  },
];

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(mockProducts);
      return;
    }

    const filtered = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={cartItemsCount}
        onCartOpen={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />

      <Hero />

      <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />

      {isCartOpen && (
        <Cart
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
