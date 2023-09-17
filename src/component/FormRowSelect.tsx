import React from "react";
import { FormRowSelectProps } from "../types.d";

const FormRowSelect: React.FC<FormRowSelectProps> = ({
  name,
  value,
  handleOptionChange,
  list,
}) => {
  return (
    <div className="flex flex-col my-4 ">
      <label
        htmlFor={name}
        className="tracking-wider ml-1 mb-1 font-[--primary-black] capitalize"
      >
        {name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        onChange={handleOptionChange}
        className="bg-white border-2 border-gray-300 p-1 rounded-md pl-3 outline-none "
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
