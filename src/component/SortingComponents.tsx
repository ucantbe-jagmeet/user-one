import { Select } from 'antd';
import React from 'react'
import { setGenderFilter, setStatusFilter } from '../redux/features/search/SearchSlice';
import { useAppDispatch } from '../redux/store';

const { Option } = Select;
const SortingComponents = () => {

      const dispatch = useAppDispatch();
  return (
    <div className="flex w-full md:w-fit justify-between space-x-4   md:mt-0">
      <Select
        defaultValue=""
        onChange={(value) => dispatch(setGenderFilter(value))}
        className="w-full sm:w-36 h-8"
      >
        <Option value="">All Genders</Option>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
      </Select>

      <Select
        defaultValue=""
        className="w-full sm:w-36 h-8"
        onChange={(value) => dispatch(setStatusFilter(value))}
      >
        <Option value="">All Statuses</Option>
        <Option value="active">Active</Option>
        <Option value="non-active">Non-Active</Option>
      </Select>
    </div>
  );
}

export default SortingComponents
