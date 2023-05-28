import { FC } from "react";
import { navLinksDataProps } from "../types.d";

const data: navLinksDataProps[] = [
  { id: 1, text: "Home" },
  { id: 2, text: "About" },
  { id: 3, text: "Contact" },
];

const Navlinks: FC = () => {
  return (
    <div className="">
      <ul className="flex">
        {data.map((links) => {
          const { id, text } = links;
          return (
            <li
              key={id}
              className="text-[--primary-black] mx-2 text-lg hover:bg-[--primary-light-blue] hover:text-[--primary-dark-blue2] p-1 px-2 rounded-md cursor-pointer transition-all duration-200 "
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlinks;
