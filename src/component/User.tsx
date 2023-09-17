import React from "react";
import { BiMale, BiFemale } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { IUser } from "./UserContainer";

interface IUserProps {
  usersData: IUser[];
}

const User: React.FC<IUserProps> = ({ usersData }) => {
  return (
    <main>
      {usersData &&
        usersData.map((user) => {
          return (
            <header className="bg-white col-span-1 p-4 rounded-md shadow-lg">
              <div className=" flex ">
                <div className="h-14 w-14 bg-[--primary-light-blue2] rounded-lg text-white flex justify-center items-center text-3xl pb-1">
                  {user.name.slice(0, 1)}
                </div>
                <div className="ml-3 flex flex-col space-y-0.5">
                  <h1 className="font-semibold text-lg">{user.name}</h1>
                  <p className=" text-xs">{user.email}</p>
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
                  <span className="ml-2 capitalize">{user.status}</span>
                </div>
                <div className="flex justify-start items-center">
                  <span className="rounded-full bg-[--primary-dark-blue1] text-white text-lg">
                    <BiMale />
                  </span>
                  <span className="ml-2 capitalize">{user.gender}</span>
                </div>
                <div className="flex justify-start items-center">
                  <span className="text-[--primary-dark-blue1] text-lg">
                    <SlCalender />
                  </span>
                  <span className="ml-2">{user.createdAt.split("T")[0]}</span>
                </div>
              </div>
            </header>
          );
        })}
    </main>
  );
};

export default User;
