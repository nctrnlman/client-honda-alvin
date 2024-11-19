const Promo: React.FC = () => {
  const promoImages = ["/promo/1.jpeg", "/promo/2.jpeg", "/promo/3.jpeg"];

  return (
    <section
      id="promo"
      className="py-16 bg-gradient-to-l from-red-500 to-red-900 text-white"
    >
      <div className="container mx-auto text-center px-6">
        {/* Heading Section */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-6 animate__animated animate__fadeInDown">
          Promo Spesial Honda
        </h2>
        <p className="text-lg md:text-xl font-medium mb-8">
          Jangan lewatkan{" "}
          <span className="font-bold text-yellow-400 pr-1">
            diskon hingga 20%
          </span>
          untuk model Honda terbaik kami. Penawaran terbatas, segera dapatkan!
        </p>

        {/* Promo Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoImages.map((image, index) => (
            <div
              key={index}
              className="relative transform transition-transform duration-500 hover:scale-105 group"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Promo ${index + 1}`}
                className="w-full h-60 md:h-72 object-cover rounded-xl shadow-lg group-hover:shadow-2xl"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500 rounded-xl">
                <span className="text-white font-bold text-lg md:text-xl">
                  Promo Spesial #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-12">
          <a
            href={`https://wa.me/6282240478316`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50">
              Hubungi Kami Sekarang!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
