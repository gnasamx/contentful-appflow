import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import SiteHeader from "../components/site-header";
import Footer from "../components/footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SiteHeader />
      <Box as="main" paddingBottom={20}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}
