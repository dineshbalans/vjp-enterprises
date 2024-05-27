import { NavLink, Outlet, useParams } from "react-router-dom";
import { categoryItems } from "../../data/productData";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductLayout = () => {
  const [isCtgryMenuOpen, setIsCtgryMenuOpen] = useState(false);
  const { category } = useParams();

  return (
    <section className=" bg-white text-gray-500 ">
      <ul className="hidden lg:flex justify-center iFtems-center gap-6 border-b py-3 text-[15px]">
        {categoryItems.map(({ id, link_to, title }) => (
          <li key={id}>
            <NavLink
              to={link_to}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "text-gray-500 hover:text-primary transition-all"
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="lg:hidden flex flex-col justify-center items-center gap-6 border-b  p-3 text-[15px]">
        <button
          className={`w-full p-2 flex items-center justify-between rounded hover:bg-gray-100 ${
            isCtgryMenuOpen ? "bg-gray-100" : ""
          }`}
          onClick={() => setIsCtgryMenuOpen((prevState) => !prevState)}
        >
          <h1 className="font-medium">
            {category?.split("-").join(" ").toUpperCase()}
          </h1>
          {isCtgryMenuOpen ? <FaMinus /> : <FaPlus />}
        </button>
        {isCtgryMenuOpen &&
          categoryItems.map(({ id, link_to, title }) => (
            <li key={id}>
              <NavLink
                to={link_to}
                onClick={() => setIsCtgryMenuOpen((prevState) => !prevState)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-primary transition-all"
                }
                o
              >
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
      <div className="w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default ProductLayout;
