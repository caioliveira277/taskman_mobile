import React from "react";
import { ThemeProvider } from "styled-components";
import { neomorphic } from "./src/components";
import Routes from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={neomorphic}>
      <Routes />
    </ThemeProvider>
  );
}
