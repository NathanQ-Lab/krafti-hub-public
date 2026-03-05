import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Brand */}
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">
            Krafti Hub
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">

          <Link href="/">
            <span className="cursor-pointer hover:text-gray-600">
              Home
            </span>
          </Link>

          <a href="/#shop" className="hover:text-gray-600">
            Shop
          </a>

          <Link href="/about">
            <span className="cursor-pointer hover:text-gray-600">
              About
            </span>
          </Link>

        </div>

      </div>

    </nav>
  );
}