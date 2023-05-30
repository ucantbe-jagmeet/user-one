import { FC } from "react";
import Search from "../component/Search";
import CreateUserBtn from "../component/CreateUserBtn";
import UserContainer from "../component/UserContainer";

const Dashboard: FC = () => {
  return (
    <>
      <main className="h-auto  flex  flex-col bg-slate-100 items-center overflow-x-hidden">
        <div className="w-[100vw] md:w-[80%]   flex md:flex-row md:justify-around md:items-start pt-10 pb-3">
          <Search />
          <CreateUserBtn />
        </div>

        <div className="h-auto w-[100%] lg:w-[90%]  overflow-auto ">
          <UserContainer />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
