import { useEffect, useState } from "react";
import Navigation from "./Navigation";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState(0);

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

  const handleDecrease = () => {};

  const handleIncrease = () => {};

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navigation />
      <main className="mb-8 ml-[6.5rem] mr-[6.5rem]">
        <h1 className="mb-6 text-4xl font-bold">Available products</h1>
        <div className="products-container grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-9 xl:grid-cols-4 xl:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card flex flex-col gap-1 rounded-lg bg-slate-50 p-4 text-gray-900 shadow-md shadow-slate-900"
            >
              <img
                src={product.image}
                className="mb-2 h-3/4 object-contain"
              ></img>
              <p className="product-name flex-1 font-semibold">
                {product.title}
              </p>
              <p className="product-price">${product.price}</p>
              <label htmlFor="quantity" className="self-center text-sm">
                Quantity{" "}
              </label>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-3 gap-y-2"
              >
                <button onClick={handleDecrease} className="">
                  -
                </button>
                <input
                  onChange={handleChange}
                  className="bg-slate-50 text-center text-sm"
                  id="quantiy"
                  name="quantity"
                  type="text"
                  value={value}
                />
                <button onClick={handleIncrease} className="">
                  +
                </button>
                <button
                  type="submit"
                  className="col-span-3 place-self-center rounded-lg bg-red-600 p-3 text-slate-200"
                >
                  Add to basket
                </button>
              </form>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Shop;
