import ProductCard from "@/components/ui/ProductCard";

export default function CategorySection({ category }) {
  return (
    <div className="mb-16">

      {/* 💖 Category Title */}
      <h3 className="text-2xl font-semibold mb-2 text-[#222]">
        {category.name}
      </h3>

      {/* ✨ Pink underline (brand touch) */}
      <div className="w-12 h-[3px] bg-[var(--primary-pink)] mb-6 rounded"></div>

      {category.products.length === 0 ? (
        <p className="text-gray-500">No products yet.</p>
      ) : (
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {category.products.map((product) => (
            <div key={product.id} className="min-w-[260px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}