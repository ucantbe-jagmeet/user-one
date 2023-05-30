import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateUserBtn = () => {
  return (
    <Link
      to="/createuser"
      className=" w-[90%] w-[100%] md:w-[9rem] bg-[--primary-light-blue2] text-white px-4 py-1 rounded-md shadow-sm tracking-wide  mt-5 md:mt-0 flex justify-center items-center "
    >
      <BsPlusCircle className="bg-white text-[--primary-light-blue2] rounded-full" />
      <span className="ml-2 pb-[2px]">Add User</span>
    </Link>
  );
};

export default CreateUserBtn;
