import { NavLink, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiBasketOutline } from "@mdi/js";
import PropTypes from "prop-types";

const Navigation = ({ quantity }) => {
  const location = useLocation();
  const { pathname } = location;
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
          {pathname.includes("shop") && (
            <li className="flex -translate-y-1 items-center px-8">
              <Icon path={mdiBasketOutline} size={1.5} />
              <div className="-translate-x-1/2 translate-y-1/2 place-self-center rounded-full border border-orange-500 bg-slate-700 p-1.5 text-xs font-extrabold">
                {quantity}
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  quantity: PropTypes.number,
};

export default Navigation;
