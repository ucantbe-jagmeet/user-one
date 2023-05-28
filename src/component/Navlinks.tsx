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
              className="text-[--primary-black] mx-2 text-xl hover:bg-[--primary-dark-blue2] hover:text-white p-2 rounded-md cursor-pointer "
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
