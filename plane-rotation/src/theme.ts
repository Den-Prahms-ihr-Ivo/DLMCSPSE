import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear(to-t, #4B379D, #262C83, #20253D)",
        minHeight: "100vh",
        color: "white",
      },
      ".maincontainer": {
        color: "#373546",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
