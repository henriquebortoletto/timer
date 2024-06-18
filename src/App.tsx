import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Router from "@/Router";
import CyclesContextProvider from "@/contexts/CyclesContext";

import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
