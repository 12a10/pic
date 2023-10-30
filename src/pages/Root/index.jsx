import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  ConfigProvider,
  Avatar,
  Badge,
} from "antd";
import { useState, useEffect } from "react";
import { Login } from "../index";
import { NotFound } from "../../components/global";
import { TodoList } from "../../components";
import {
  // Form,
  // useLoaderData,
  // redirect,
  useNavigate,
  Link,Outlet
} from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;
const items1 = [
  { key: "1", label: <Link to='/'>Hình ảnh</Link>},
  { key: "2", label:   <Link to='/note'>Ghi chú</Link>},
  { key: "3", label: <Link to='/info' >Thông tin</Link> },
];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const Root = ({Component}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // useEffect(() => {
  //   const userLoggedIn = localStorage.getItem("isLoggedIn");
  //   const fetchUserInfo = JSON.parse(localStorage.getItem("accountInfo"));
  //   if (fetchUserInfo) {
  //     setUserInfo(fetchUserInfo);
  //   }
  //   if (userLoggedIn === "true") {
  //     setIsLoggedIn(true);
  //   } else {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn]);

  // const handleLogout = () => {
  //   localStorage.setItem("isLoggedIn", "false");
  //   setIsLoggedIn(false);
  // };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#192655",
          color: "#86A789",
          justifyContent: "space-between",
        }}
      >
        {/* <div className="demo-logo" /> */}
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                //   darkItemColor: '#86A789',
                darkItemBg: "#3876BF",
                //   darkSubMenuItemBg: '#86A789',
                darkItemSelectedColor: "#86A789",
                darkItemSelectedBg: "#86A789",
              },
            },
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{
              width:'300px'
            }}
            items={items1}
          />
        </ConfigProvider>

      </Header>
      <Content
        style={{
          // padding: "0 5px",
        }}
      >
        <Breadcrumb
          style={{
            // margin: "5px 0",
          }}
        ></Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: "#FFFCF9",
          }}
        >
          <Content
            style={{
              padding: "0 10px",
              minHeight: 800,
            }}
          >
              {/* <Outlet></Outlet> */}
           {Component}
          </Content>
        </Layout>
      </Content>  
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  )
    
 
};
export default Root;
