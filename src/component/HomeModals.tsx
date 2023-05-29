import { FC } from "react";
import { homeModalsDataProps } from "../types.d";

const data: homeModalsDataProps[] = [
  {
    id: 1,
    btn1: "Userone Trainings",
    text: "Add super skills to your list of powers",
    btn2: "Know More",
  },
  {
    id: 2,
    btn1: "Jobs",
    text: "Userone Jobs",
    btn2: "Apply Know",
  },
  {
    id: 3,
    btn1: "Internships",
    text: "Greatest Internships Ever",
    btn2: "Participate now",
  },
];

const HomeModals: FC = () => {
  return (
    <>
      <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 mg:gap-7 lg:gap-4">
        {data.map((links) => {
          const { id, btn1, btn2, text } = links;
          return (
            <div
              key={id}
              className="h-48 w-96 md:w-[22rem]  rounded-md bg-gradient-to-r from-[--primary-dark-blue1] to-[--primary-dark-blue4] pl-6 flex flex-col items-start justify-around"
            >
              <button className="border text-sm border-slate-300 px-2 py-1 rounded-md bg-transparent text-white  hover:scale-105 tracking-wider">
                {btn1}
              </button>
              <h1 className=" md:w-56 text-white text-lg md:text-md lg:text-md">
                {text}
              </h1>
              <button className="border text-sm border-slate-300 px-2 py-1  rounded-md bg-white text-[--primary-dark-blue1] hover:scale-105">
                {btn2}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeModals;
