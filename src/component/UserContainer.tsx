import React, { useEffect, useState } from "react";
import User from "./User";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { API_HOST } from "./api-handler/host";

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

  const fetchUsersData = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/api/v1/users`);

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
  const handleDelete = async (userId: string) => {
    try {
      await axios.delete(`${API_HOST}/api/v1/users/${userId}`);
      toast.success("User deleted successfully...");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <main className="w-full">
      {usersData && <User usersData={usersData} handleDelete={handleDelete} />}
    </main>
  );
};

export default UserContainer;
