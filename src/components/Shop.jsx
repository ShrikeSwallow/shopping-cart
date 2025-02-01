import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ItemCard from "./ItemCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchFakeStore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (!ignore) {
        setProducts(data);
      }
    };
    fetchFakeStore();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="mb-8 ml-[6.5rem] mr-[6.5rem]">
        <h1 className="mb-6 text-4xl font-bold">Available products</h1>
        <div className="products-container grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-9 xl:grid-cols-4 xl:gap-12">
          {products.map((product) => (
            <ItemCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.image}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Shop;
