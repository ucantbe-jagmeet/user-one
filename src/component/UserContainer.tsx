import React, { useEffect, useState } from "react";
import User from "./User";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useAppSelector } from "../redux/store";

const URL = process.env.REACT_APP_API_URL!;

export interface IUser {
  _id: string;
  name: string;
  email: string;
  gender: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const UserContainer: React.FC = () => {
  const [usersData, setUsersData] = useState<IUser[]>();
  const { searchQuery } = useAppSelector(
    (state: { SearchSlice: any }) => state.SearchSlice
  );
  const fetchUsersData = async () => {
    try {
      if (URL) {
        const response = await axios.get(
          `${URL}api/v1/users?keyword=${searchQuery}`
        );

        const UsersData = response.data.results;
        setUsersData(UsersData);
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
  const handleDelete = async (userId: string) => {
    try {
      await axios.delete(`${URL}/api/v1/users/${userId}`);
      toast.success("User deleted successfully...");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, [searchQuery]);
  return (
    <main className="w-full">
      {usersData && <User usersData={usersData} handleDelete={handleDelete} />}
    </main>
  );
};

export default UserContainer;
