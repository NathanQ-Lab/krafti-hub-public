import { createWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({ product }) {
  return (
    <div className="min-w-[250px] bg-white p-4 rounded-xl shadow-md flex flex-col h-full transition transform hover:-translate-y-1 hover:shadow-xl duration-200">

      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded-md mb-4 w-full h-[180px] object-cover"
      />

      <h4 className="font-semibold text-lg">
        {product.name}
      </h4>

      <p className="text-gray-600 text-sm mb-2 h-[40px] overflow-hidden">
        {product.description}
      </p>

      <p className="font-bold text-black mb-4">
        R {product.price}
      </p>

      <div className="mt-auto">
        <a
          href={createWhatsAppLink(product.name)}
          target="_blank"
          className="block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Order on WhatsApp
        </a>
      </div>

    </div>
  );
}