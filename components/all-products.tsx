import ProductPreview from "./product-preview";
import productData from "../public/data/products"

const AllProducts = () => {
  return (
    <section>
      <div className="grid grid-cols-1 space-y-8">
        {productData.map((product) => (
          <ProductPreview
            key={product.title}
            title={product.title}
            logo={product.logo}
            tagline={product.tagline}
            excerpt={product.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;