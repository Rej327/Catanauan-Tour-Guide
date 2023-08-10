import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Under from "./components/Under.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <App /> */}
      <Under />
    </ChakraProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
