import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Strict Mode is turned off, because it renders everything twice in
  // dev mode and that also means it applies all transformations
  // twice to the plane, which makes testing aggravating.
  /*</React.StrictMode>*/
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
  /*</React.StrictMode>*/
);
