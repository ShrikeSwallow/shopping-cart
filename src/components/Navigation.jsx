import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
