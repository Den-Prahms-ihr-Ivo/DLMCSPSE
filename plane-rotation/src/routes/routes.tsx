import { createBrowserRouter } from "react-router-dom";
import MainContent from "../pages/MainContent";
import BirdCards from "../pages/BirdCards";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/plane", element: <MainContent /> },
  { path: "/birds", element: <BirdCards /> },
]);

export default router;
