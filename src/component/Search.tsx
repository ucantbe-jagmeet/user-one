import { FC } from "react";

const Search: FC = () => {
  return (
    <div className="w-[90%] flex flex-col center sm:flex-row">
      <input className=" bg-white border-2 border-gray-300 p-1 rounded-md pl-3 outline-none sm:w-[70%] md:w-[50%] lg:w-[30%]" />
      <button className="bg-[--primary-green] text-white px-4 py-1 rounded-md shadow-sm tracking-wide sm:ml-4 mt-2 sm:mt-0">
        Search
      </button>
    </div>
  );
};

export default Search;
