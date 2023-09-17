import React from "react";
import User from "./User";

const UserContainer: React.FC = () => {
  return (
    <main className=" w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid gap-x-10 px-12 gap-y-10 py-10">
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </main>
  );
};

export default UserContainer;
