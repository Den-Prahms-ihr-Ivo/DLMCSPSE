import { extendTheme, textDecoration } from "@chakra-ui/react";
import { baseStyle } from "@chakra-ui/react/dist/types/avatar/avatar";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear(to-t, #4B379D, #262C83, #20253D)",
        minHeight: "100vh",
        color: "#F8F8FA",
      },
      ".link": {
        height: "s",
        _hover: {
          bg: "rgba(148, 171, 202, 0.2)",
          cursor: "pointer",
        },
      },
      ".link-active": {
        fontWeight: "bold",
        bg: "rgba(148, 171, 202, 0.2)",
        cursor: "pointer",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: { textDecoration: "none" },
      },
      variants: {
        "is-active": {
          bg: "red",
        },
      },
    },
    Container: {
      baseStyle: {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        borderRadius: 10,
      },

      variants: {
        "with-shadow": {
          boxShadow:
            "rgba(252, 254, 255, 0.5) 0px 13px 27px -5px, rgba(19, 62, 83, 0.4) 0px 8px 16px -8px",
        },
        "link-container": {
          height: "s",
          borderRadius: 10,
        },
        "link-container-active": {
          bg: "red",
          height: "s",
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
