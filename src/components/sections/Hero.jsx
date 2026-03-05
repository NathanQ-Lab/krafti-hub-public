export default function Hero() {
  return (
    <section className="bg-[#F3D6DB] py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-6 text-black">
          Custom Gifts Made With Love
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Personalized mugs, tumblers, cushions and more.
          Perfect gifts for birthdays, weddings and anniversaries.
        </p>

        <a
          href="#shop"
          className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Browse Catalogue
        </a>

      </div>
    </section>
  );
}