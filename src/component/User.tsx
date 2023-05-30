import React from "react";
import { BiMale, BiFemale } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const User: React.FC = () => {
  return (
    <header className="bg-white w-[95%] p-4 rounded-md shadow-lg">
      <div className=" flex ">
        <div className="h-14 w-14 bg-[--primary-light-blue2] rounded-lg text-white flex justify-center items-center text-3xl pb-1">
          J
        </div>
        <div className="ml-2 flex flex-col">
          <h1 className="font-semibold text-lg">Jagmeet</h1>
          <p className=" text-sm">Jagmeet@gmail.com</p>
        </div>
        <div className="text-2xl ml-auto ">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4">
        <div className="flex justify-start items-center">
          <span className="text-[--primary-dark-blue1] text-lg">
            <FiThumbsUp />
          </span>
          <span className="ml-2">Active</span>
        </div>
        <div className="flex justify-start items-center">
          <span className="rounded-full bg-[--primary-dark-blue1] text-white text-lg">
            <BiMale />
          </span>
          <span className="ml-2">Male</span>
        </div>
        <div className="flex justify-start items-center">
          <span className="text-[--primary-dark-blue1] text-lg">
            <SlCalender />
          </span>
          <span className="ml-2">Created At</span>
        </div>
      </div>
    </header>
  );
};

export default User;
