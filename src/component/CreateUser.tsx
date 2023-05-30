import React from "react";
import { Link } from "react-router-dom";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

const CreateUser: React.FC = () => {
  const handleChange = () => {
    console.log("input");
  };
  return (
    <main className="h-auto w-[100%]   py-10 md:mt-10 lg:mt-16">
      <h1 className="text-center font-semibold tracking-wider uppercase ">
        Welcome to Create User <span className="text-3xl">👇🏻</span>
      </h1>
      <div className="h-auto w-[90%] md:w-[80%] lg:w-[70%]  rounded-md grid grid-cols-1 md:grid-cols-2 mx-auto  gap-x-10">
        <FormRow
          type={"text"}
          name={"Name"}
          value={""}
          handleChange={handleChange}
        />
        <FormRow
          type={"email"}
          name={"Email"}
          value={""}
          handleChange={handleChange}
        />

        <FormRowSelect
          name="Status"
          value=""
          handleChange={handleChange}
          list={["Active", "Non-Active"]}
        />
        <FormRowSelect
          name="Gender"
          value=""
          handleChange={handleChange}
          list={["Male", "Female", "Other"]}
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-5 md:gap-x-11 md:col-span-2 sm:col-span-1 mt-3 ">
          <Link
            to="/"
            className="w-[100%] border  border-[--primary-green]  px-2 py-1  rounded-md    text-white bg-[--primary-green] transition-all duration-200 ease-in mt-3 hover:text-[--primary-dark-blue1] hover:border-[--primary-dark-blue1] hover:bg-white text-center"
          >
            Clear
          </Link>

          <Link
            to="/"
            className="w-[100%] border  border-[--primary-dark-blue1] px-2 py-1  rounded-md   text-white bg-[--primary-dark-blue1] transition-all duration-200 ease-in mt-3 hover:text-[--primary-dark-blue1] hover:border-[--primary-dark-blue1] hover:bg-white text-center"
          >
            Submit
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CreateUser;
