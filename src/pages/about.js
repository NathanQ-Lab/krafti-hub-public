import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-6">
          About Krafti Hub
        </h1>

        <p className="text-gray-700 mb-6">
          Krafti Hub is a small custom gift business focused on creating
          meaningful and personalised products for every occasion.
          From custom mugs and tumblers to cushions, socks and clothing,
          each item is designed with care and attention to detail.
        </p>

        <p className="text-gray-700 mb-6">
          Whether you are celebrating a birthday, anniversary, wedding
          or simply looking for a unique gift, we help bring your ideas
          to life through custom designs and personalised prints.
        </p>

        <p className="text-gray-700 mb-6">
          Every order is carefully prepared and customers receive a
          design preview before printing to make sure everything looks
          exactly the way they want.
        </p>

        <p className="text-gray-700">
          Thank you for supporting a small business ❤️
        </p>

      </section>

      <Footer />
    </>
  );
}