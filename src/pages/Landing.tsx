import { FC } from "react";
import Logo from "../component/Logo";
import landing from "../assets/images/landing.svg";
const Landing: FC = () => {
  return (
    <>
      <main className=" h-[100vh]  p-6 flex flex-col md:ml-10 ">
        <div className=" my-4 ">
          <Logo />
        </div>
        <div className=" mt-44  md:mt-24 flex flex-col items-center md:flex-row md:justify-evenly md:items-start ">
          <div className=" md:w-2/6 md:mt-20">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odio laudantium eos a, cupiditate repellat nam velit suscipit eius
              facere quidem nulla veritatis magni iusto numquam aliquid
              accusantium aut veniam atque. Dolore, sed quo! Expedita
              perferendis
            </p>
            <button className="border text-sm border-[--primary-dark-blue1] px-2 py-1 b  rounded-md bg-white text-[--primary-dark-blue1]  mt-10 hover:text-white hover:bg-[--primary-dark-blue1] transition-all duration-200 ease-in ">
              Login/Register
            </button>
          </div>
          <div className="">
            <img src={landing} alt="" className="hidden md:block h-[25rem]" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
