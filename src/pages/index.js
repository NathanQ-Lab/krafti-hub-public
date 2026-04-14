import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CategorySection from "@/components/sections/CategorySection";
import Footer from "@/components/layout/Footer";

import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));

      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(items);
    };

    fetchProducts();
  }, []);

  // 🔥 Group products by category
  const groupedProducts = {
    tumblers: products.filter((p) => p.category === "tumblers"),
    mugs: products.filter((p) => p.category === "mugs"),    
    bottles: products.filter((p) => p.category === "bottles"),
    pillows: products.filter((p) => p.category === "pillows"),
    snowglobes: products.filter((p) => p.category === "snowglobes"),
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Shop Section */}
      <section id="shop" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="section-title text-2xl mb-12">
            Shop Our Catalogue
          </h2>

          <CategorySection
            category={{ name: "Tumblers", products: groupedProducts.tumblers }}
          />

          <CategorySection
            category={{ name: "Mugs", products: groupedProducts.mugs }}
          />

          <CategorySection
            category={{ name: "Water bottles", products: groupedProducts.bottles }}
          />

          <CategorySection
            category={{ name: "Pillowcases", products: groupedProducts.pillows }}
          />

          <CategorySection
            category={{ name: "Snow Globes", products: groupedProducts.snowglobes }}
          />

        </div>
      </section>

      {/* 💖 HOW ORDERING WORKS (NEW SECTION) */}
      <section className="section-pink py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="section-title text-2xl mb-12">
            How Ordering Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                🛍️ Choose Product
              </h3>
              <p className="text-gray-600">
                Browse the catalogue and choose the product you
                would like to personalise.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                📲 Order on WhatsApp
              </h3>
              <p className="text-gray-600">
                Click the WhatsApp order button and send us
                your request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                🎨 Send Your Design
              </h3>
              <p className="text-gray-600">
                Share your photo, name or custom design idea.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                🚚 Receive Your Gift
              </h3>
              <p className="text-gray-600">
                Your personalised product will be created
                and delivered to you.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* About Section */}
<section className="bg-white py-20">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="section-title text-2xl mb-6">
      About Krafti Hub
    </h2>

    <p className="text-gray-600 mb-8">
      Krafti Hub creates personalised gifts designed to make every
      moment special. From custom tumblers and mugs to clothing and
      home gifts, each item is made with care and attention to detail.
    </p>

    <a href="/about" className="btn-primary">
      Learn More
    </a>

  </div>

</section>

      <Footer />
    </>
  );
}