import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Pages/Home";
import AboutUs from "../Components/Pages/AboutUs";
import Blogs from "../Components/Pages/Blogs";
import ContactUs from "../Components/Pages/ContactUs";
import Service from "../Components/Pages/Service";
import Projects from "../Components/Pages/Projects";
import Modular from "../Components/Pages/Modular";
import FullHome from "../Components/Pages/FullHome";
import Luxury from "../Components/Pages/Luxury";
import Renovation from "../Components/Pages/Renovation";
import PopularTags from "../Components/Pages/PopularTags";
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
      {
        path: "modular",
        element: <Modular />,
      },
      {
        path: "fullhome",
        element: <FullHome />,
      },
      {
        path: "luxury",
        element: <Luxury />,
      },
      {
        path: "renovation",
        element: <Renovation />,
      },
      {
        path: "populartag",
        element: <PopularTags />,
      },
    ],
  },
]);
