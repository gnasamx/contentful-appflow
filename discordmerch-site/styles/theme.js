import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    typography: {
      500: "#1f2021",
    },
    brand: {
      400: "#9199f6",
      500: "#5865f2",
    },
  },
  styles: {
    global: {
      "html, body": {
        color: "typographyColor",
        fontFamily: "Poppins",
      },
      ".wysiwyg": {
        ul: {
          paddingLeft: 4,
        },
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button: {
      defaultProps: {
        variants: "solid",
        size: "lg",
      },
      variants: {
        solid: {
          backgroundColor: "brand.500",
          color: "white",
          fontWeight: "normal",
          fontSize: "lg",
          borderRadius: "full",
          _hover: {
            color: "white",
            backgroundColor: "brand.400",
          },
        },
      },
    },
  },
});

export default theme;
