import React, { useRef, useState } from "react";
import { BiMale, BiFemale } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { IUser } from "./UserContainer";
import { Dropdown, Modal, Space } from "antd";
import { useAppDispatch } from "../redux/store";
import { openUpdateUserMemberModal } from "../redux/features/modal/ModalSlice";
import { setUserIdValue } from "../redux/features/taskId/taskIdSlice";

interface IUserProps {
  usersData: IUser[];
  handleDelete: (userId: string) => void;
}

const items = [
  {
    key: "1",
    label: <button className="text-blue-500">Update</button>,
  },
  {
    key: "2",
    danger: true,
    label: <button className="text-red-500">Delete User</button>,
  },
];

const User: React.FC<IUserProps> = ({ usersData, handleDelete }) => {
  const dispatch = useAppDispatch();
  return (
    <main className=" w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-x-10 px-12 gap-y-10 py-10">
      {usersData &&
        usersData.map((user) => {
          return (
            <header className="bg-white col-span-1 p-4 rounded-md shadow-lg">
              <div className=" flex ">
                <div className="h-14 w-14 bg-[--primary-light-blue2] rounded-lg text-white flex justify-center items-center text-3xl pb-1 capitalize">
                  {user.name.slice(0, 1)}
                </div>
                <div className="ml-3 flex flex-col space-y-0.5">
                  <h1 className="font-semibold text-lg capitalize">
                    {user.name}
                  </h1>
                  <p className="text-xs tracking-wide text-gray-500">
                    {user.email}
                  </p>
                </div>
                <div className="text-2xl ml-auto cursor-pointer">
                  <Dropdown
                    overlay={
                      <div className="px-3 py-1 bg-white border rounded shadow-md ">
                        <ul>
                          {items.map((item) => (
                            <li
                              key={item.key}
                              className={`py-2 cursor-pointer`}
                              onClick={() => {
                                if (item.key === "1") {
                                  dispatch(setUserIdValue(user._id));
                                  dispatch(openUpdateUserMemberModal());
                                  // showModal(user);
                                } else if (item.key === "2") {
                                  handleDelete(user._id);
                                }
                              }}
                            >
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                  >
                    <BsThreeDotsVertical />
                  </Dropdown>
                </div>
              </div>
              <div className=" grid grid-cols-1 lg:grid-cols-2 px-3 pt-3 gap-y-3">
                <div className="flex justify-start items-center">
                  <span className="text-[--primary-dark-blue1] text-lg">
                    {user.status === "active" ? (
                      <FiThumbsUp />
                    ) : (
                      <FiThumbsDown className="text-red-500 mt-1" />
                    )}
                  </span>
                  <span className="ml-2 capitalize">{user.status}</span>
                </div>
                <div className="flex justify-start items-center">
                  <span className="rounded-full bg-[--primary-dark-blue1] text-white text-lg">
                    {user.gender === "male" ? (
                      <BiMale />
                    ) : (
                      <BiFemale className="bg-pink-500 rounded-full" />
                    )}
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
