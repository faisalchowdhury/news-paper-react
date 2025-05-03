import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Category from "../Pages/Category";

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
]);
