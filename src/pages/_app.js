import "../../styles/tailwind.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Head from "next/head";

import { ThemeProvider } from "next-themes";

const erenkdev = ({ Component, pageProps }) => {
  return (<ThemeProvider
    attribute="class"
    defaultTheme="light"
  >
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>)
}

export default erenkdev;
