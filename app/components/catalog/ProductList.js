import ProductCard from "./ProductCard";

const getItemsByCategory = async (category) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/catalog/${category}?`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const ProductList = async ({ category }) => {
  const { data } = await getItemsByCategory(category);

  console.log(data);

  return (
    <div className="justify-center items-center gap-4 grid grid-cols-1 sm:grid-cols-3 lg:gap-8">
      {data.map((product) => (
        <ProductCard key={product.slug} item={product} />
      ))}
    </div>
  );
};
export default ProductList;
