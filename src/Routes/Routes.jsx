import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home";
import AboutUs from "../Components/Pages/AboutUs";
import Blogs from "../Components/Pages/Blogs";
import ContactUs from "../Components/Pages/ContactUs";
import Service from "../Components/Pages/Service";
import Projects from "../Components/Pages/Projects";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);
