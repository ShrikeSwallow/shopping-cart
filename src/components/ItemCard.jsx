import { useState } from "react";
import PropTypes from "prop-types";

const ItemCard = ({ productId, title, price, imageUrl, onSubmit }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };
  const handleDecrease = () => {
    if (Number.parseInt(value) > 0) setValue(Number.parseInt(value) - 1);
  };
  const handleIncrease = () => {
    setValue(Number.parseInt(value) + 1);
  };

  return (
    <div className="product-card flex flex-col gap-1 rounded-lg bg-slate-50 p-4 text-gray-900 shadow-md shadow-slate-900">
      <img src={imageUrl} className="mb-2 h-3/4 object-contain"></img>
      <p className="product-name flex-1 font-semibold">{title}</p>
      <p className="product-price">${price}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(productId, value);

          setValue(0);
        }}
        className="grid grid-cols-3 gap-y-2"
      >
        <label htmlFor="quantity" className="col-span-3 self-center text-sm">
          Quantity{" "}
        </label>
        <button type="button" onClick={handleDecrease} className="">
          -
        </button>
        <input
          onChange={handleChange}
          className="bg-slate-50 text-center text-sm"
          id="quantity"
          name="quantity"
          type="text"
          value={value}
        />
        <button type="button" onClick={handleIncrease} className="">
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
  );
};

ItemCard.propTypes = {
  productId: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default ItemCard;
