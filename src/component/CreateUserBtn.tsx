import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateUserBtn = () => {
  return (
    <Link
      to="/createuser"
      className=" w-[100%] h-8 md:w-[13rem]  bg-[#008BDC] text-white px-4 py-1 rounded-md shadow-sm tracking-wide   flex justify-center items-center "
    >
      <BsPlusCircle className="bg-white text-[--primary-light-blue2] rounded-full" />
      <span className="ml-2 pb-[2px]">Add User</span>
    </Link>
  );
};

export default CreateUserBtn;
