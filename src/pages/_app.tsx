import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "../context/user";
import { ToastProvider } from "../hooks/toast";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Titulo</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <GlobalStyles />
        <UserProvider>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
