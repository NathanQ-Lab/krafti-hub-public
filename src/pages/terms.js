import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-10 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">

          <p>
            All products sold by Krafti Hub are personalised and
            custom-made according to customer requests.
          </p>

          <p>
            Once an order has been confirmed and production has started,
            cancellations or changes may not always be possible.
          </p>

          <p>
            Customers may receive a design preview before production
            begins to confirm the design is correct.
          </p>

          <p>
            Delivery timelines may vary depending on production time
            and courier services used.
          </p>

          <p>
            Krafti Hub is not responsible for courier delays once the
            package has been handed over to the delivery provider.
          </p>

          <p>
            By placing an order through WhatsApp or any other channel,
            customers agree to these terms and conditions.
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}