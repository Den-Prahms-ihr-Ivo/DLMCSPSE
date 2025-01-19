import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import BirdCards from "../pages/BirdCards";
import MainContent from "../pages/MainContent";
import ErrorPage from "../pages/ErrorPage";
import Math from "../pages/Math";
import GraphDetail from "../pages/GraphDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "plane/", element: <MainContent /> },
      { path: "birds/", element: <BirdCards /> },
      { path: "math/", element: <Math /> },
      { path: "detail/", element: <GraphDetail /> },
    ],
  },
]);

export default router;
