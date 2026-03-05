import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CategorySection from "@/components/sections/CategorySection";
import Footer from "@/components/layout/Footer";
import { categories } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-[#F9F5F6]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12">
            Shop Our Catalogue
          </h2>

          {categories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
            />
          ))}

        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h2 className="text-3xl font-bold mb-6">
          About Krafti Hub
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Krafti Hub creates personalised gifts designed to make every
          moment special. From custom tumblers and mugs to clothing and
          home gifts, each item is made with care and attention to detail.
        </p>

        <a
          href="/about"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Learn More
        </a>

      </section>

      <Footer />
    </>
  );
}