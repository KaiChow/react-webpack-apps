import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
// import PropTypes from "prop-types";
import OrderInfos from "./components/OrderInfo";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `订单信息`,
    children: <OrderInfos />,
  },
  {
    key: "2",
    label: `提单信息`,
    children: `Content of Tab Pane 2`,
  },
];

const TabWrapper: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

function OrderDetail() {
  return (
    <div>
      <TabWrapper />
    </div>
  );
}

// OrderDetail.propTypes = {};

export default OrderDetail;
