import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="mb-8 mt-3">
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              className="px-8 py-4 aria-[current=page]:bg-red-600"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="bg-slate-600 px-8 py-4 aria-[current=page]:bg-red-600"
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
