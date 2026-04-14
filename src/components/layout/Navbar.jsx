import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: TEXT LOGO */}
        <Link href="/">
          <span className="text-lg font-semibold cursor-pointer">
            Krafti Hub
          </span>
        </Link>

        {/* CENTER: IMAGE LOGO */}
        <div className="flex-1 flex justify-center">
          <img
            src="/logo.png"
            alt="Krafti Hub"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* RIGHT: NAV LINKS */}
        <div className="flex gap-6 text-sm font-medium">

          <Link href="/">
            <span className="cursor-pointer hover:text-pink-500 transition">
              Home
            </span>
          </Link>

          <a href="/#shop" className="hover:text-pink-500 transition">
            Shop
          </a>

          <Link href="/about">
            <span className="cursor-pointer hover:text-pink-500 transition">
              About
            </span>
          </Link>

        </div>

      </div>

    </nav>
  );
}