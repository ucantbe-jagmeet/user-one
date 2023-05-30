import React from "react";
import User from "./User";

const UserContainer: React.FC = () => {
  return (
    <main className="h-full rounded-md  shadow-lg flex flex-col justify-start items-center p-5 pb-16 ">
      <h1 className="font-semibold my-5">31 Users Found</h1>
      <div className=" w-[100%]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-3 md:gap-4 justify-items-center ">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </main>
  );
};

export default UserContainer;
