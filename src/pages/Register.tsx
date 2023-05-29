import { FC } from "react";
import Logo from "../component/Logo";
import FormRow from "../component/FormRow";
import { Link } from "react-router-dom";

const Register: FC = () => {
  const handleChange = () => {
    console.log("input");
  };
  return (
    <>
      <div className="h-[100vh]  bg-slate-200 flex justify-center items-center ">
        <div className="h-auto w-[80%] bg-white rounded-md  md:w-[55%] lg:w-[30%] py-4 px-6 shadow-lg">
          <div className="w-[100%] ">
            <Logo />
          </div>
          <h1 className="text-2xl font-semibold text-center tracking-wider mt-4 md:text-3xl text-[--primary-black]">
            Login
          </h1>
          <FormRow
            type={"text"}
            name={"Name"}
            value={""}
            handleChange={handleChange}
          />
          <FormRow
            type={"text"}
            name={"Email"}
            value={""}
            handleChange={handleChange}
          />
          <FormRow
            type={"text"}
            name={"Password"}
            value={""}
            handleChange={handleChange}
          />
          <Link to="/">
            <button className="w-[100%] border  border-[--primary-dark-blue1] px-2 py-1  rounded-md  text-[--primary-dark-blue1]  text-white bg-[--primary-dark-blue1] transition-all duration-200 ease-in mt-3 hover:text-[--primary-dark-blue1] hover:border-[--primary-dark-blue1] hover:bg-white">
              Submit
            </button>
          </Link>
          <p className="text-sm tracking-wide capitalize text-center text-green-500 py-4 ">
            Not A member yet?
            <button className=" text-[--primary-dark-blue1] ml-1  ">
              Login/Register
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
