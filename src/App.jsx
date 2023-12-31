import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageRender from "./PageRender";
import { Empty } from "antd";
import NotFound from "./components/global/NotFound";
import { Login, Root, PictureForFun, GameBauCua, Register } from "./pages";
import { TodoList } from "./components";
import RegisterForm from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/pic",
    element: <Root Component={<PictureForFun></PictureForFun>}/>,
    errorElement: <NotFound></NotFound>,
    
  },
  {
    path: "/",
    element: <Root Component={<PictureForFun></PictureForFun>}/>,
    errorElement: <NotFound></NotFound>,
    
  },
  {
    path: "/note",
    element: <Root Component={<TodoList></TodoList>}/>,
    errorElement: <NotFound></NotFound>,
    
  },
  {
    path: "/baucua",
    element: <Root Component={<GameBauCua></GameBauCua>}/>,
    errorElement: <NotFound></NotFound>,
    
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound></NotFound>,
  }, {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/:page/:slug",
    element: <PageRender />,
    // errorElement:<NotFound></NotFound>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
