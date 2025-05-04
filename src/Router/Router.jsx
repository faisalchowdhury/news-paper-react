import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import SingleNews from "../Pages/SingleNews";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "category/:catid",
    Component: Category,
    loader: () => fetch("../news.json"),
  },
  {
    path: "single-news/:newsId",
    Component: SingleNews,
    loader: () => fetch("../news.json"),
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "registration",
    Component: Registration,
  },
]);
