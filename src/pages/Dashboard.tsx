import { FC, useEffect, useState } from "react";
import Search from "../component/Search";
import CreateUserBtn from "../component/CreateUserBtn";
import UserContainer, { IUser } from "../component/UserContainer";
import axios, { AxiosError } from "axios";
import { API_HOST } from "../component/api-handler/host";

const Dashboard: FC = () => {
  const [usersData, setUsersData] = useState<IUser[]>();

  const fetchUsersData = async () => {
    try {
      const response = await axios.get(`${API_HOST}/api/v1/users`);

      const UsersData = response.data;
      setUsersData(UsersData);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
      }
      // unhandled non-AxiosError goes here
      throw error;
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, [usersData]);
  return (
    <>
      <main className="min-h-screen overflow-y-auto flex flex-col bg-slate-100 items-center hide-scrollbar ">
        <div className="w-[90%] md:w-[80%] flex flex-col justify-center md:flex-row md:justify-around md:items-start pt-12 pb-3">
          <Search />
          <CreateUserBtn />
        </div>
        <h1 className="font-semibold my-5">{usersData?.length} Users Found</h1>

        <UserContainer />
      </main>
    </>
  );
};

export default Dashboard;
