import React from "react";
import { Form, Input, Button, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
  import { Link, useNavigate } from "react-router-dom";
  import "./index.css";

  const LoginForm = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
      const accountInfo = {
        account: values.account,
      };
        
      localStorage.setItem('accountInfo', JSON.stringify(accountInfo));
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/pic");
    };

    return (
      <div className="login-form-container">
        <Form name="login-form" onFinish={onFinish}>
          <Form.Item
            name="account"
            rules={[
              {
                required: true,
                type: "text",
                message: "Please enter a valid account",
              },
            ]}
          >
            <Input
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
            
          <Form.Item>
            <Button type="primary" htmlType="submit" className="custom-button">
              Login
            </Button>
            <span> or </span>
            <Link to="/register">Register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  };


export default LoginForm;
