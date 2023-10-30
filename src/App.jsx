import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageRender from "./PageRender";
import { Empty } from "antd";
import NotFound from "./components/global/NotFound";
import { Login, Root, PictureForFun } from "./pages";
import { TodoList } from "./components";

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
    path: "/login",
    element: <Login />,
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
