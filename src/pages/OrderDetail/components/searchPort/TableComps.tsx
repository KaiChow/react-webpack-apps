import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  GetPortList,
  PortItemTypes,
  PortListParmasTypes,
  PortListTypes,
} from "@/services/baseData";

type TableCompsProps = {
  onHandleRow: (val: PortItemTypes) => void;
};

// table组件的列表数据
const TableComps: React.FC<TableCompsProps> = (props) => {
  const columns: ColumnsType<PortItemTypes> = [
    {
      title: "中文名称",
      dataIndex: "NameCn",
      key: "NameCn",
    },
    {
      title: "英文名称",
      dataIndex: "NameEn",
      key: "NameEn",
    },
    {
      title: "所属国家",
      dataIndex: "CountryNameCn",
      key: "CountryNameCn",
    },
  ];
  const [data, setData] = useState<PortItemTypes[]>([]);
  const [pages, setPages] = useState({
    total: 0,
    pageIndex: 1,
    pageSize: 5,
    current: 1,
    showSizeChanger: false,
  });

  const getData = (PageIndex: number, keyWord?: string) => {
    const args: PortListParmasTypes = {
      KeyWord: keyWord,
      PageIndex,
      PageSize: pages.pageSize,
      TransportMode: 0,
    };
    GetPortList<PortListTypes>(args).then((result) => {
      const { Items, TotalCount } = result;
      setData(Items);
      setPages((prev) => ({
        ...prev,
        total: TotalCount,
      }));
    });
  };

  const handleChange = (
    pagination: any,
    _filters: any,
    _sorter: any,
    _extra: any
  ) => {
    const { total, pageIndex, pageSize, current } = pagination;
    setPages((prev) => ({ ...prev, total, pageIndex, pageSize, current }));
    getData(current);
  };
  useEffect(() => {
    getData(1);
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      rowKey="Id"
      bordered={true}
      pagination={pages}
      onRow={(record) => {
        return {
          onClick: () => {
            props.onHandleRow(record);
          }, // 点击行
        };
      }}
      onChange={handleChange}
    />
  );
};

export default TableComps;
