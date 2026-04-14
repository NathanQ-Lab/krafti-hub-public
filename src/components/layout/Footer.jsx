export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-12">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Krafti Hub
          </h3>

          <p className="text-gray-400 text-sm">
            Personalised gifts made with care. From custom mugs and
            tumblers to clothing and home gifts.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="/#shop" className="hover:text-white">
                Shop
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>

            <li>
  <a href="/terms" className="hover:text-white">
    Terms & Conditions
  </a>
</li>


        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li>
              WhatsApp: 081 855 5053
            </li>

            <li>
              Instagram: @kraftihub
            </li>

            <li>
              Delivery available via PUDO & Courier
            </li>

          </ul>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Krafti Hub. All rights reserved.
      </div>

    </footer>
  );
}