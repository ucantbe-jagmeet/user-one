import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FormRow from "../FormRow";
import FormRowSelect from "../FormRowSelect";
import { closeUpdateUserMemberModal } from "../../redux/features/modal/ModalSlice";
import HorizontalBar from "../HorizontalBar";
import { IUser } from "../UserContainer";
import toast from "react-hot-toast";
import { GrClose } from "react-icons/gr";
const URL = process.env.REACT_APP_API_URL!;

interface IUpdateUserModal {
  userId: string;
}

const InititalUser = {
  _id: "",
  name: "",
  email: "",
  status: "",
  gender: "",
  createdAt: "",
};
const UpdateUserModal: React.FC<IUpdateUserModal> = ({ userId }) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState<IUser>(InititalUser);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${URL}api/v1/users/${userId}`,
        details
      );
      toast.success("User updated successfully...");
      dispatch(closeUpdateUserMemberModal());
      window.location.reload();
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

  const fetchUsersData = async () => {
    console.log("URL", URL);
    try {
      if (URL) {
        const response = await axios.get(`${URL}api/v1/users/${userId}`);
        const details: IUser = response.data;
        setDetails(details);
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
  }, []);

  return (
    <main className="h-screen w-full flex items-center justify-center z-[1000] fixed bg-black bg-opacity-60 mb-20">
      <div className="h-[70%] lg:w-[50%] w-[80%] bg-white  rounded-md  py-5 z-30 flex relative items-center justify-center mb-32">
        <div
          className="absolute top-5 left-5 text-xl cursor-pointer text-red-600"
          onClick={() => dispatch(closeUpdateUserMemberModal())}
        >
          <GrClose />
        </div>
        {details && (
          <form className="lg:w-[40%] w-[70%]" onSubmit={handleSubmit}>
            <h2 className="md:text-3xl text-xl text-center font-semibold">
              Edit{" "}
              <span className="relative">
                User
                <HorizontalBar />
              </span>
            </h2>
            <FormRow
              type="name"
              name="name"
              value={details.name}
              handleChange={handleChange}
            />
            <FormRow
              type="email"
              name="email"
              value={details.email}
              handleChange={handleChange}
            />
            <FormRowSelect
              name="status"
              value={details.status}
              handleOptionChange={handleChange}
              list={["active", "non-active"]}
            />
            <FormRowSelect
              name="gender"
              value={details.gender}
              handleOptionChange={handleChange}
              list={["male", "female", "other"]}
            />

            <div className="mt-10 mb-3 ">
              <button
                type="submit"
                className="bg-[#7F56D9] w-full rounded-md py-2 text-white"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default UpdateUserModal;
