import ProductCard from "@/components/ui/ProductCard";

export default function CategorySection({ category }) {
  return (
    <div className="mb-16">

      {/* 💖 Category Title */}
      <h3 className="text-2xl font-semibold mb-2 text-[#222]">
        {category.name}
      </h3>

      {/* ✨ Pink underline */}
      <div className="w-12 h-[3px] bg-[var(--primary-pink)] mb-6 rounded"></div>

      {category.products.length === 0 ? (
        <p className="text-gray-500">No products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}