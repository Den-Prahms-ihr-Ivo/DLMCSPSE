import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import BirdCards from "../pages/BirdCards";
import MainContent from "../pages/MainContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "plane/", element: <MainContent /> },
      { path: "birds/", element: <BirdCards /> },
    ],
  },
]);

export default router;
