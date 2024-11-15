const Promo: React.FC = () => {
  const promoImages = [
    "https://www.honda-bintaro.com/wp-content/uploads/2020/04/Promo-April-2020-small-min.jpg", // Gambar promo 1
    "https://www.officialhondabekasi.com/wp-content/uploads/2020/01/Promo-Terbaru-Honda-.jpg", // Gambar promo 2
    "https://honda-bogor.id/wp-content/uploads/2024/01/qCd67YaZeNMXWiGue2fgbiqpGG9s16ULjhzdDWh4.jpg", // Gambar promo 3
    "https://www.honda-bandung.com/wp-content/uploads/2024/07/Promo-Honda-Bandung-Juli-2024-930x620.webp", // Gambar promo 4
    // Tambahkan gambar lainnya sesuai kebutuhan
  ];

  return (
    <section id="promo" className="py-16 bg-red-600 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
          Promo Spesial
        </h2>
        <p className="mt-4  mb-4 text-lg md:text-xl font-light">
          Dapatkan diskon hingga 20% untuk model-model Honda tertentu! Kunjungi
          kami hari ini.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {promoImages.map((image, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Promo ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-2xl hover:shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;
