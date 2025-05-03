import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import SingleNews from "../Pages/SingleNews";

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
]);
