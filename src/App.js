import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import Header from "./Header/Header";
import Title from "./Title/Title";
import Body from "./FormBody/Body";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans, Roboto, Arial",
    h6: {
      fontSize: 18,
      fontWeight: 600,
    },
  },
});
function App() {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Title />
          <Body />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
