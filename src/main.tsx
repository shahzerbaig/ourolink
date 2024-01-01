import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Chakra Provider to provide the theme to the entire app */}
    <ChakraProvider theme={theme}>
      {/* Color Mode Script to persist the color mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {/* Browser Router to provide routing to the entire app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
