import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components/layouts";
import CheckOut from "../Pages/Checkout/CheckOut";
import HomePage from "../Pages/HomPage/HomePage";
import Contact from "../Pages/ContactUs/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import TopKitchen from "../Pages/TopKitchen/TopKitchen";
import PopularFoods from "../Pages/popularFoods/PopularFoods";

export const Element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "top-kitchen",
        element: <TopKitchen />,
      },
      {
        path: "about-us",
        element: <PopularFoods />,
      },
    ],
  },
]);
