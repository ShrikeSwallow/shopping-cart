import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import ItemCard from "./ItemCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [totalBasket, setTotalBasket] = useState(0);

  useEffect(() => {
    let ignore = false;

    const fetchFakeStore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const curatedData = data.map((product) => {
        return { ...product, inBasket: 0 };
      });
      if (!ignore) {
        setProducts(curatedData);
      }
    };
    fetchFakeStore();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Navigation quantity={totalBasket} />
      <main className="mb-8 ml-[6.5rem] mr-[6.5rem]">
        <h1 className="mb-6 text-4xl font-bold">Available products</h1>
        <div className="products-container grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-9 xl:grid-cols-4 xl:gap-12">
          {products.map((product) => (
            <ItemCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.image}
              inBasket={product.inBasket}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Shop;
