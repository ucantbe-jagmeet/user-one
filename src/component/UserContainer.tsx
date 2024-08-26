import React, { useEffect, useState } from "react";
import User from "./User";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useAppSelector } from "../redux/store";
import { Pagination } from "antd";
import Loader from "./Loader";

const URL = process.env.REACT_APP_API_URL!;
export interface IUser {
  _id: string;
  name: string;
  email: string;
  gender: string;
  status: string;
  createdAt: string;
}

const UserContainer: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [usersData, setUsersData] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { searchQuery, genderFilter, statusFilter } = useAppSelector(
    (state: { SearchSlice: any }) => state.SearchSlice
  );

  const fetchUsersData = async () => {
    try {
      setLoading(true);
      if (URL) {
        const response = await axios.get(
          `${URL}api/v1/users?keyword=${searchQuery}&page=${currentPage}&limit=${pageSize}&gender=${
            genderFilter || ""
          }&status=${statusFilter || ""}`
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
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchTotalUsers = async () => {
    try {
      if (URL) {
        const response = await axios.get(`${URL}api/v1/users/totalUsers`, {
          params: {
            keyword: searchQuery,
            gender: genderFilter || "",
            status: statusFilter || "",
          },
        });
        const { totalResult } = response.data;
        setTotalUsers(totalResult);
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
       throw error;
    }
  };

 const handleDelete = async (userId: string) => {
   try {
     await axios.delete(`${URL}api/v1/users/${userId}`);
     toast.success("User deleted successfully...");
     window.location.reload();
   } catch (error) {
     console.error("Error deleting user:", error);
   }
 };
  useEffect(() => {
    fetchUsersData();
    fetchTotalUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchUsersData();
    fetchTotalUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, currentPage, pageSize, genderFilter, statusFilter]);

 

  return loading ? (
    <div className="mt-20">
      <Loader />
    </div>
  ) : (
    <main className="w-full pb-20">
      {usersData && (
        <>
          <User usersData={usersData} handleDelete={handleDelete} />
          {totalUsers > 1 && (
            <div className="flex justify-center mt-10">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                onChange={(page, pageSize) => {
                  setCurrentPage(page);
                  setPageSize(pageSize);
                }}
                total={totalUsers}
              />
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default UserContainer;
