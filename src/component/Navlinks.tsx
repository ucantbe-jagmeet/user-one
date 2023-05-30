import { FC } from "react";
import { navLinksDataProps } from "../types.d";
import { NavLink } from "react-router-dom";

const data: navLinksDataProps[] = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Create User", href: "createuser" },
  { id: 3, text: "Display User", href: "dashboard" },
];

const Navlinks: FC = () => {
  return (
    <div className="">
      <ul className="flex">
        {data.map((links) => {
          const { id, text, href } = links;
          return (
            <li
              key={id}
              className="text-[--primary-black] mx-2 text-lg hover:bg-[--primary-light-blue] hover:text-[--primary-dark-blue2] p-1 px-2 rounded-md cursor-pointer transition-all duration-200 "
            >
              <NavLink
                to={href}
                style={({ isActive }) => {
                  return { color: isActive ? " #036CFF" : "#333333" };
                }}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlinks;
