import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import GlobalStyle from "../styles";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

// Create a context for color mode
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Combined theme that changes based on mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "light" ? "#4a6741" : "#22311d",
            paper: mode === "light" ? "#5a7d4c" : "#2b3d25",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline enableColorScheme />
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
