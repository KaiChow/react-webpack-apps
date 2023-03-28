import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input } from "antd";
import styles from "./index.module.less";
import { LoginApi } from "@/services/login";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values: API.GET_USER) => {
    const { AccountName, Password } = values;
    setLoading(true);
    const result = await LoginApi<API.GET_USER_RESULT>({
      ClientId: "OHL-Web",
      AccountName,
      Password,
    });
    setLoading(false);
    cookie.save("token", result.Token);
    navigate("/dashboard/about");
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className={styles.reg_container}>
      <Card className={styles.reg_card}>
        <h3 className={styles.title}>欢迎登录后台管理系统</h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="AccountName"
            rules={[
              { required: true, message: "Please input your AccountName!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="Password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 3, span: 16 }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 12 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
};

export default Login;
