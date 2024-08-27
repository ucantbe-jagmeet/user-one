import { FC } from "react";
import Search from "../component/Search";
import CreateUserBtn from "../component/CreateUserBtn";
import UserContainer from "../component/UserContainer";
import { setSearchQuery} from "../redux/features/search/SearchSlice";
import { useAppSelector, useAppDispatch } from "../redux/store";
import UpdateUserModal from "../component/modals/UpdateUserModal";
import SortingComponents from "../component/SortingComponents";
const Dashboard: FC = () => {
  const { searchQuery } = useAppSelector(
    (state: { SearchSlice: any }) => state.SearchSlice
  );
  const { isUpdateUserModalOpen } = useAppSelector(
    (state: { Modal: any }) => state.Modal
  );
  const { userId } = useAppSelector(
    (state: { tasksIdSlice: any }) => state.tasksIdSlice
  );
  const dispatch = useAppDispatch();

  const handleInputChange = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <>
      <main className="min-h-screen overflow-y-auto flex flex-col bg-slate-100 items-center hide-scrollbar ">
        {isUpdateUserModalOpen && <UpdateUserModal userId={userId} />}
        <div className="w-full px-12  flex flex-col justify-center md:flex-row md:justify-around md:items-start pt-12 pb-3 gap-y-5 sm:gap-y-0">
          <Search
            inputValue={searchQuery}
            handleInputChange={handleInputChange}
          />
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <SortingComponents />
            <CreateUserBtn />
          </div>
        </div>
        <UserContainer />
      </main>
    </>
  );
};

export default Dashboard;
