import React, { useContext } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "../context/user";
import { ToastProvider } from "../hooks/toast";
import { PostProvider } from "../hooks/useManagePosts";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Blog</title>
          <link rel="shortcut icon" href="/img/logo.png" />
          <link rel="apple-touch-icon" href="/img/logo.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
          {/* TAGS DE SEO OG*/}
          <meta property="og:title" content="Blog"></meta>
          <meta property="og:locale" content="pt-BR" />
          <meta property="og:site_name" content="Blog"></meta>
          <meta property="og:description" content="Blog criado por LipzDev." />
          <meta name="description" content="Blog criado por LipzDev."></meta>
          <meta property="og:image" content="/img/logo.png"></meta>
          {/* TAGS DE SEO TWITTER*/}
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:title" content="Blog"></meta>
          <meta
            name="twitter:description"
            content="Blog criado por LipzDev."
          ></meta>
          <meta name="twitter:site" content="@LipzDev"></meta>
          <meta name="twitter:creator" content="@LipzDev"></meta>
          <meta name="twitter:image" content="/img/logo.png"></meta>
          <meta name="theme-color" content="#5500ff"></meta>
        </Head>
        <GlobalStyles />
        <ToastProvider>
          <PostProvider>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </PostProvider>
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
