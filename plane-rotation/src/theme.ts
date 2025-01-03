import { extendTheme } from "@chakra-ui/react";
import { baseStyle } from "@chakra-ui/react/dist/types/avatar/avatar";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear(to-t, #4B379D, #262C83, #20253D)",
        minHeight: "100vh",
        color: "white",
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        bg: "#FCFEFF",
        borderRadius: 15,
      },
      variants: {
        "with-shadow": {
          boxShadow:
            "rgba(252, 254, 255, 0.5) 0px 13px 27px -5px, rgba(19, 62, 83, 0.4) 0px 8px 16px -8px",
        },
      },
    },
    // styles for the `a`
    a: {
      color: "teal.500",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
});

export default theme;
