import { FC } from "react";
import Search from "../component/Search";
import CreateUserBtn from "../component/CreateUserBtn";
import UserContainer from "../component/UserContainer";

const Dashboard: FC = () => {
  return (
    <>
      <main className="h-[100vh]  flex bg-slate-200 flex-col items-center overflow-x-hidden">
        <div className="w-[100vw] flex-col items-center flex md:flex-row md:justify-around md:items-start p-10">
          <Search />
          <CreateUserBtn />
        </div>

        <div className="h-auto w-[100%] overflow-auto ">
          <UserContainer />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
