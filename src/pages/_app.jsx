import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { theme } from "theme";

(async () => {
  if (
    process.env.NODE_ENV === "development" &&
    typeof document !== "undefined" &&
    typeof window !== "undefined"
  ) {
    const axe = (await import("@axe-core/react")).default;
    const ReactDOM = (await import("react-dom")).default;

    axe(React, ReactDOM, 1000);
  }
})();

const CustomApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default CustomApp;
