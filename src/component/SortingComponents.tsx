import { Select } from 'antd';
import React from 'react'
import { setGenderFilter, setStatusFilter } from '../redux/features/search/SearchSlice';
import { useAppDispatch } from '../redux/store';

const { Option } = Select;
const SortingComponents = () => {

      const dispatch = useAppDispatch();
  return (
    <div className="flex space-x-2 mr-2">
      <Select
        defaultValue=""
        style={{ width: 120 }}
        onChange={(value) => dispatch(setGenderFilter(value))}
      >
        <Option value="">All Genders</Option>
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
      </Select>

      <Select
        defaultValue=""
        style={{ width: 120 }}
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
