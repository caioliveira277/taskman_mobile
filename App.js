import React from "react";
import { ThemeProvider } from "styled-components";
import { neomorphic } from "./src/components";
import Login from "./src/pages/login";

export default function App() {
  return (
    <ThemeProvider theme={neomorphic}>
      <Login />
    </ThemeProvider>
  );
}
