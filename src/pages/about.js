import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-10 text-center">
          About Krafti Hub
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">

          <p>
            Krafti Hub is a small custom gift business focused on creating
            personalised products that make every moment special.
            From custom tumblers and mugs to clothing and personalised
            home gifts, each product is made with care and attention
            to detail.
          </p>

          <p>
            Whether you're celebrating a birthday, anniversary,
            graduation or any special occasion, our goal is to help
            turn meaningful ideas into beautiful personalised gifts.
          </p>

          <p>
            Every order is handled with care, and in many cases a design
            preview is sent to customers before printing to make sure
            everything looks perfect.
          </p>

        </div>

      </section>


      {/* Meet Our Krafti Queen */}
      <section className="bg-[#F9F5F6] py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Krafti Queen
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="/about/krafti-queen.jpg"
              alt="Krafti Queen"
              className="rounded-xl shadow-lg w-full object-cover"
            />

            <div className="text-gray-700 space-y-4 text-lg">

              <p>
                Behind Krafti Hub is our very own Krafti Queen,
                the creative mind responsible for designing and
                producing each personalised product.
              </p>

              <p>
                What started as a passion for crafting unique
                gifts has grown into a small business dedicated
                to helping people celebrate their special moments.
              </p>

              <p>
                Every design is carefully prepared to ensure
                customers receive a high-quality personalised
                product that they can treasure.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* How Ordering Works */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            How Ordering Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                1. Choose Product
              </h3>
              <p className="text-gray-600">
                Browse the catalogue and choose the product you
                would like to personalise.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                2. Order on WhatsApp
              </h3>
              <p className="text-gray-600">
                Click the WhatsApp order button and send us
                your request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                3. Send Your Design
              </h3>
              <p className="text-gray-600">
                Share your photo, name or custom design idea.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                4. Receive Your Gift
              </h3>
              <p className="text-gray-600">
                Your personalised product will be created
                and delivered to you.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}