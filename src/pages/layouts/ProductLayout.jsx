import { NavLink, Outlet } from "react-router-dom";
import { categoryItems } from "../../data/productData";

const ProductLayout = () => {
  return (
    <section className=" bg-white text-gray-500 ">
      <ul className="flex justify-center items-center gap-6 border-b py-3 text-[15px]">
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
      <div className="w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default ProductLayout;
