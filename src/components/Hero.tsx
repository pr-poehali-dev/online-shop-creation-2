const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Лучшие товары для вас
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-purple-100">
          Качественная электроника, одежда и товары для дома
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          Смотреть каталог
        </button>
      </div>
    </section>
  );
};

export default Hero;
