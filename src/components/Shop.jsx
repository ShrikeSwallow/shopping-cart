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
      <div className="products-container grid grid-cols-6 gap-12">
        {products.map((product) => (
          <div key={product.id} className="product-card flex flex-col">
            <img src={product.image}></img>
            <p className="product-name">{product.title}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
