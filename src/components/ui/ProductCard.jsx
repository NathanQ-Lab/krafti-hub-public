import { createWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({ product }) {
  return (
    <div className="min-w-[250px] bg-white p-4 rounded-xl shadow-md flex flex-col h-full transition transform hover:-translate-y-1 hover:shadow-xl duration-200">

      {/* IMAGE */}
      <div className="w-full aspect-square bg-white rounded-md flex items-center justify-center mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow">

        {/* NAME */}
        <h4 className="font-semibold text-lg mb-1">
          {product.name}
        </h4>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description || ""}
        </p>

        {/* PRICE (BLACK) */}
        <p className="font-bold text-black mb-4">
          R {product.price}
        </p>

        {/* BUTTON (LIGHTER PINK) */}
        <div className="mt-auto">
          <a
            href={createWhatsAppLink(product)}
            target="_blank"
            className="btn-primary"
          >
            Order on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}