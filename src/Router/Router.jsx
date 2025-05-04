import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import SingleNews from "../Pages/SingleNews";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loading from "../Pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "category/:catid",
    Component: Category,
    loader: () => fetch("../news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "single-news/:newsId",
    element: (
      <PrivateRoute>
        <SingleNews></SingleNews>
      </PrivateRoute>
    ),
    loader: () => fetch("../news.json"),
    hydrateFallbackElement: <Loading></Loading>,
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
