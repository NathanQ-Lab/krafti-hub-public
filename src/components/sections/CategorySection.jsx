import ProductCard from "@/components/ui/ProductCard";

export default function CategorySection({ category }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6">
        {category.name}
      </h3>

      {category.products.length === 0 ? (
        <p className="text-gray-500">No products yet.</p>
      ) : (
        <div className="flex gap-6 overflow-x-auto">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}