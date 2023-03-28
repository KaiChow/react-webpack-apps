import React from "react";
import { Select } from "antd";
import type { BaseSelectRef } from "rc-select";
import { PortItemTypes } from "@/services/baseData";
import TableComps from "./TableComps";

export type SearchPortProps = {
  value?: any;
  onPortChange: (val: PortItemTypes) => void;
};

const SearchPort: React.FC<SearchPortProps> = ({ value, onPortChange }) => {
  // 处理下拉框的关闭
  const searchRef = React.useRef<BaseSelectRef>(null);
  // 点击的下拉框
  const handleRow = (record: PortItemTypes) => {
    searchRef?.current?.blur();
    onPortChange(record);
  };
  return (
    <Select
      ref={searchRef}
      value={value}
      allowClear={true}
      onChange={onPortChange}
      dropdownMatchSelectWidth={420}
      dropdownRender={() => <TableComps onHandleRow={handleRow} />}
    />
  );
};

export default SearchPort;
