import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import DefaultLayout from "@/layouts/DefaultLayout";

import Home from "@/pages/Home";
import History from "@/pages/History";
import NotFound from "@/pages/NotFound";

import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
