import { FC } from "react";
import Search from "../component/Search";
import CreateUserBtn from "../component/CreateUserBtn";
import UserContainer from "../component/UserContainer";

const Dashboard: FC = () => {
  return (
    <>
      <main className="h-fit flex flex-col bg-slate-100 items-center hide-scrollbar ">
        <div className="w-[90%] md:w-[80%] flex flex-col justify-center md:flex-row md:justify-around md:items-start pt-10 pb-3">
          <Search />
          <CreateUserBtn />
        </div>

        <div className="h-fit w-[100%] lg:w-[90%]  overflow-hidden ">
          <UserContainer />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
