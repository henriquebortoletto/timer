import { ThemeProvider } from "styled-components";

import Button from "@/components/Button";

import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Button />
  </ThemeProvider>
);

export default App;
