import { FC } from "react";
import { navLinksDataProps } from "../types.d";
import { Link } from "react-router-dom";

const data: navLinksDataProps[] = [
  { id: 1, text: "Home", href: "/home" },
  { id: 2, text: "Create User", href: "/createuser" },
  { id: 3, text: "Contact", href: "/about" },
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
              <Link to={href}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlinks;
