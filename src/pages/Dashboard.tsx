import { FC } from "react";
import Search from "../component/Search";
import CreateUser from "../component/CreateUser";
import UserContainer from "../component/UserContainer";

const Dashboard: FC = () => {
  return (
    <>
      <main className="h-[100vh]  flex bg-slate-200 flex-col items-center">
        <div className="w-[100vw] flex-col items-center flex md:flex-row md:justify-around md:items-start p-10">
          <Search />
          <CreateUser />
        </div>

        <div className="h-auto w-[100%] overflow-auto ">
          <UserContainer />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
