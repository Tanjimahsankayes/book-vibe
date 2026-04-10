import { createBrowserRouter } from "react-router";
import mainlayout from "../layout/mainlayout";
import Books from "../Pages/Books/Books";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/erroPage/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainlayout,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);