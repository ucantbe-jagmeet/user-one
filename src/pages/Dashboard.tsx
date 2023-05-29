import { FC } from "react";
import Search from "../component/Search";
import CreateUser from "../component/CreateUser";

const Dashboard: FC = () => {
  return (
    <>
      <main className="h-[100vh]  flex bg-slate-200 ">
        <div className="w-[100vw] flex-col items-center flex md:flex-row md:justify-around md:items-start p-10">
          <Search />
          <CreateUser />
        </div>

        {/* <div className="h-auto w-[80%]  bg-slate-200 rounded-md  md:w-[55%] lg:w-[30%] py-4 px-6 shadow-lg"></div> */}
      </main>
    </>
  );
};

export default Dashboard;
