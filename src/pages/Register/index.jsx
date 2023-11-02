import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined , EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/authAction";
import "./index.css";
// import

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = () => {

    }
    const onFinishRegister = (values) => {
      const accountInfoRegister = {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
        password: values.password,

      };
      const {firstName, lastName, email, password} = accountInfoRegister;
      console.log(firstName, lastName, email, password);
      dispatch(register(firstName, lastName, email, password));
    };

    return (
      <div className="login-form-container">
        <Form name="login-form" onFinish={onFinishRegister}>
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                type: "text",
                message: "Please enter a valid name",
              },
            ]}
          >
            <Input
              placeholder="Enter your first name"
            
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                type: "text",
                message: "Please enter a valid name",
              },
            ]}
          >
            <Input
              placeholder="Enter your last name"
            
            />
          </Form.Item>
            

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
            
            />
          </Form.Item>
            
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                type: "password",
                message: "Please enter a valid password",
              },
            ]}
          >
            <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="custom-button">
              Register
            </Button>
            <span> or </span>
            <Link to="/login">Login now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  };


export default RegisterForm;
