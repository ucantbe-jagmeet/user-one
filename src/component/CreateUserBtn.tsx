import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const CreateUserBtn = () => {
  return (
    <button className="w-[90%] md:w-[9rem] bg-[--primary-light-blue2] text-white px-4 py-1 rounded-md shadow-sm tracking-wide sm:ml-4 mt-5 md:mt-0 flex justify-center items-center ">
      <BsPlusCircle className="bg-white text-[--primary-light-blue2] rounded-full" />
      <span className="ml-2 pb-[2px]">Add User</span>
    </button>
  );
};

export default CreateUserBtn;
