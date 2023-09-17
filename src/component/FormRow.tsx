import { FC } from "react";
import { FormRowProps } from "../types.d";

const FormRow: FC<FormRowProps> = ({ type, name, value, handleChange }) => {
  return (
    <div className="flex flex-col my-4 ">
      <label
        htmlFor={name}
        className="tracking-wider ml-1 mb-1 font-[--primary-black] capitalize"
      >
        {name}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className="bg-white border-2 border-gray-300 p-1 rounded-md pl-3 outline-none "
      />
    </div>
  );
};

export default FormRow;
