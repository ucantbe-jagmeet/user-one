import { FC, useEffect, useState } from "react";
import Search from "../component/Search";
import CreateUserBtn from "../component/CreateUserBtn";
import UserContainer, { IUser } from "../component/UserContainer";
import axios, { AxiosError } from "axios";
import { setSearchQuery } from "../redux/features/search/SearchSlice";
import { useAppSelector, useAppDispatch } from "../redux/store";

const URL = process.env.REACT_APP_API_URL!;

const Dashboard: FC = () => {
  const [totalUsers, setTotalUsers] = useState<number>(0);

  const { searchQuery } = useAppSelector(
    (state: { SearchSlice: any }) => state.SearchSlice
  );

  const dispatch = useAppDispatch();

  const handleInputChange = (query: string) => {
    dispatch(setSearchQuery(query));
  };
  const fetchUsersData = async () => {
    console.log("URL", URL);
    try {
      if (URL) {
        const response = await axios.get(
          `${URL}api/v1/users?keyword=${searchQuery}`
        );
        const result = response.data.totalResult;
        setTotalUsers(result);
      }
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
  }, [searchQuery]);
  return (
    <>
      <main className="min-h-screen overflow-y-auto flex flex-col bg-slate-100 items-center hide-scrollbar ">
        <div className="w-[90%] md:w-[80%] flex flex-col justify-center md:flex-row md:justify-around md:items-start pt-12 pb-3">
          <Search
            inputValue={searchQuery}
            handleInputChange={handleInputChange}
          />
          <CreateUserBtn />
        </div>
        <h1 className="font-semibold my-5">
          {totalUsers} user{totalUsers > 1 && "s"} found
        </h1>

        <UserContainer />
      </main>
    </>
  );
};

export default Dashboard;
