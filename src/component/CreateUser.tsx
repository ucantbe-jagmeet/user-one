import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import axios, { AxiosError } from "axios";
import { API_HOST } from "./api-handler/host";
import toast from "react-hot-toast";

let initialState = {
  name: "",
  email: "",
  gender: "Male",
  status: "Non-Active",
};

const CreateUser: React.FC = () => {
  const [postUser, setPostUser] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setPostUser({ ...postUser, [name]: value });
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostUser({ ...postUser, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_HOST}/api/v1/users`, postUser);
      toast.success("User Created successfully...");
      setPostUser(initialState);
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        toast.error(message);
      }
      // unhandled non-AxiosError goes here
      throw error;
    }
  };
  return (
    <main className="h-auto w-[100%]   py-10 md:mt-10 lg:mt-16">
      <h1 className="text-center font-semibold tracking-wider uppercase ">
        Welcome to Create User <span className="text-3xl">👇🏻</span>
      </h1>
      <form
        className="h-auto w-[90%] md:w-[80%] lg:w-[70%]  rounded-md grid grid-cols-1 md:grid-cols-2 mx-auto  gap-x-10"
        onSubmit={handleSubmit}
      >
        <FormRow
          type="text"
          name="name"
          value={postUser.name}
          handleChange={handleChange}
        />
        <FormRow
          type="email"
          name="email"
          value={postUser.email}
          handleChange={handleChange}
        />

        <FormRowSelect
          name="status"
          value={postUser.status}
          handleOptionChange={handleOptionChange}
          list={["Active", "Non-Active"]}
        />
        <FormRowSelect
          name="gender"
          value={postUser.gender}
          handleOptionChange={handleOptionChange}
          list={["Male", "Female", "Other"]}
        />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-5 md:gap-x-11 md:col-span-2 sm:col-span-1 mt-5 ">
          <button
            className="w-[100%] border  border-[--primary-green]  px-2 py-1  rounded-md    text-white bg-[--primary-green] transition-all duration-200 ease-in hover:text-[--primary-dark-blue1] hover:border-[--primary-dark-blue1] hover:bg-white text-center"
            onClick={() => setPostUser(initialState)}
          >
            Clear
          </button>

          <button
            className="w-[100%] border  border-[--primary-dark-blue1] px-2 py-1  rounded-md   text-white bg-[--primary-dark-blue1] transition-all duration-200 ease-in hover:text-[--primary-dark-blue1] hover:border-[--primary-dark-blue1] hover:bg-white text-center mt-5 sm:mt-0"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateUser;
