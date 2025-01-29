import { useEffect, useState } from "react";
import Navigation from "./Navigation";

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
      <h1>Available products</h1>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </>
  );
};

export default Shop;
