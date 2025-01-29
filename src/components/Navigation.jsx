import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="aria-[current=page]:bg-red-700">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="aria-[current=page]:bg-red-700">
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
