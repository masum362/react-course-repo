import { createBrowserRouter } from "react-router";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import App from "./day 42/App";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import Teams from "./pages/Teams";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
        children: [
          {
            path: "/services/web-development",
            element: <div>Web Development</div>,
          },
          {
            path: "/services/app-development",
            element: <div>App Development</div>,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        loader:() =>{
            return fetch("https://jsonplaceholder.typicode.com/users/1")
        },
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path:"/teams/:teamId",
        element:<Teams />
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

export { router };
