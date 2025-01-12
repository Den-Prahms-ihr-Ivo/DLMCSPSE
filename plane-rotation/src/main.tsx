import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./pages/MainContent";
import theme from "./theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /*</React.StrictMode>*/
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
  /*</React.StrictMode>*/
);
