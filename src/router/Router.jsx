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
        path: "popular",
        element: <PopularFoods />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
]);
