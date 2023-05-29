import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <>
      <main className="h-[100vh]  flex bg-slate-200 ">
        <div className="w-[100vw] flex justify-around">
          <h1>Search</h1>
          <h1>Create one</h1>
        </div>

        {/* <div className="h-auto w-[80%]  bg-slate-200 rounded-md  md:w-[55%] lg:w-[30%] py-4 px-6 shadow-lg"></div> */}
      </main>
    </>
  );
};

export default Dashboard;
