import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/images/ErrorPage.svg";

const ErrorPage: React.FC = () => {
  return (
    <div className="h-[100vh] bg-slate-200 flex flex-col justify-center items-center p-10 text-center">
      <img src={Img} alt="not found" className="h-96 md:mb-10 sm:h-80" />
      <h3 className="font-semibold ">Ohhh! Page not Found</h3>
      <p className="font-semibold mb-10">
        We can't seem to find the page you're looking for
      </p>
      <Link to="/">
        <button className="w-[15rem] border   px-2 py-1  rounded-md transition-all duration-200 ease-in mt-3 text-[--primary-dark-blue2] border-[--primary-dark-blue1] bg-white">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
