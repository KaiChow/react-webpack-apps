// layouts/Base.tsx
import { Outlet, useNavigate,useLocation, useMatch } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./Base.module.less";
import { useEffect, useState } from "react";

function GlobalHeader() {
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
    </Layout.Header>
  );
}

function GlobalContent() {
  return (
    <Layout.Content
      className="site-layout"
      style={{ padding: "0 12px", marginTop: 64 }}
    >
      <div
        className="site-layout-background"
        style={{  minHeight: 680 }}
      >
        {/* outlet */}
        <Outlet />
      </div>
    </Layout.Content>
  );
}

function GlobalSider() {
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  let location = useLocation();
  useEffect(() => { 
    const locationArr:string[] = location.pathname.split("/")
    locationArr.shift()
    setSelectedKeys(locationArr)
    setOpenKeys(locationArr)
  },[])
  // 路由的部分
  const itemsArr = [
    {
      key: "dashboard",
      label: "工作台",
      children: [
        {
          key: "about",
          label: "内容介绍",
          onClick: () => navigate("/dashboard/about"),
        },
        {
          key: "article",
          label: "热门文章",
          onClick: () => navigate("/dashboard/article"),
        },
        {
          key: "orderDetail",
          label: "订单详情",
          onClick: () => navigate("/dashboard/orderDetail"),
        },
      ],
    },
    {
      key: "tables",
      label: "Table列表",
      children: [
        {
          key: "baseTable",
          label: "内容介绍",
          onClick: () => navigate("/tables/baseTable"),
        },
        
      ],
    },
    {
      key: "demos",
      label: "测试代码",
      children: [
        {
          key: "useHookDemo",
          label: "UseHookDemo",
          onClick: () => navigate("/demos/useHookDemo"),
        },
        {
          key: "useCallbackDemo",
          label: "UseCallbackDemo",
          onClick: () => navigate("/demos/useCallbackDemo"),
        },
        {
          key: "useRefDemo",
          label: "UseRefDemo",
          onClick: () => navigate("/demos/useRefDemo"),
        },
      ],
    },
  ];
// 点击menuItem
  const handleMenu = (menuItem: any) => {
    const {  keyPath } = menuItem
    setSelectedKeys(keyPath);
  };
  // subMenu开关的回调
  const onOpenChange = (openKeys: string[]) => { 
    setSelectedKeys(openKeys);
    setOpenKeys(openKeys)
  }
  return (
    <Layout.Sider
      className="site-slider"
      style={{ marginTop: 64 }}
      theme={"light"}
    >
      <Menu
        mode={"inline"}
        items={itemsArr}
        onClick={handleMenu}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={ onOpenChange}
      />
    </Layout.Sider>
  );
}


export default function Index() {
  return (
    <Layout style={{ height: "100%" }}>
      <GlobalHeader />
      <Layout hasSider={true}>
        <GlobalSider />
        <GlobalContent />
      </Layout>
    </Layout>
  );
}

