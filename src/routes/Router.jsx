import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        index: true,
        loader: () => fetch('booksData.json'),
        path: "/",
         element: <Home></Home>,

      },
      {
        path: "/about",
        element: <About></About>,
      }
      ]
  },
  
]);