import { FC } from "react";
import Search from "../component/Search";
import CreateUserBtn from "../component/CreateUserBtn";
import UserContainer from "../component/UserContainer";

const Dashboard: FC = () => {
  return (
    <>
      <main className="max-h-screen overflow-y-auto flex flex-col bg-slate-100 items-center hide-scrollbar ">
        <div className="w-[90%] md:w-[80%] flex flex-col justify-center md:flex-row md:justify-around md:items-start pt-12 pb-3">
          <Search />
          <CreateUserBtn />
        </div>
        <h1 className="font-semibold my-5">31 Users Found</h1>

        <UserContainer />
      </main>
    </>
  );
};

export default Dashboard;
