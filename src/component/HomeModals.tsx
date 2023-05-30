import { FC } from "react";
import { homeModalsDataProps } from "../types.d";
import { Link } from "react-router-dom";

const data: homeModalsDataProps[] = [
  {
    id: 1,
    btn1: "Create",
    text: "Add Super Hero to your list of display",
    btn2: "Add One",
    color1: "from-[--primary-orange1]",
    color2: "to-[--primary-orange2]",
    href: "/createuser",
  },
  {
    id: 2,
    btn1: "Display",
    text: "Userone Heros",
    btn2: "View More",
    color1: "from-[--primary-dark-blue1]",
    color2: "to-[--primary-dark-blue4]",
    href: "/dashboard",
  },
  {
    id: 3,
    btn1: "Landing Page",
    text: "Always Welcome",
    btn2: "Logout",
    color1: "from-[--primary-green1]",
    color2: "to-[--primary-green2]",
    href: "/landing",
  },
];

const HomeModals: FC = () => {
  return (
    <>
      <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 mg:gap-7 lg:gap-4">
        {data.map((links) => {
          const { id, btn1, btn2, text, color1, color2, href } = links;

          return (
            <div
              key={id}
              className={`h-48 w-96 md:w-[22rem]  rounded-md bg-gradient-to-r ${color1} ${color2} pl-6 flex flex-col items-start justify-around `}
            >
              <button className=" text-lg  py-1 rounded-md bg-transparent text-white  hover:scale-105 tracking-wider">
                {btn1}
              </button>
              <h1 className=" md:w-56 text-white text-lg md:text-md lg:text-md">
                {text}
              </h1>
              <Link
                to={href}
                className=" text-sm px-2 py-1  rounded-md bg-white text-slate-500  hover:scale-105 tracking-wider mb-3"
              >
                {btn2}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeModals;
