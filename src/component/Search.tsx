import { FC } from "react";
interface ISearch {
  inputValue?: string;
  handleInputChange?: (query: string) => void;
}

const Search: FC<ISearch> = ({ inputValue, handleInputChange }) => {
  return (
    <div className="w-[100%] flex flex-col center sm:flex-row">
      <input
        type="search"
        name="search"
        className=" bg-white border-2 border-gray-300 p-1 rounded-md pl-3 outline-none sm:w-[83%] md:w-[50%] lg:w-[35%]"
        placeholder="Search any user or email..."
        onChange={(e) => {
          let query = e.target.value;
          if (handleInputChange) handleInputChange(query);
        }}
      />
      <button
        className="bg-[--primary-green1] text-white px-4 py-1 rounded-md shadow-sm tracking-wide sm:ml-4 mt-2 sm:mt-0"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
