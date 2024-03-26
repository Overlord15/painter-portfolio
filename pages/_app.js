// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Navbar from "@/components/Navbar";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
      <Head>
        <title>Rohit Painter</title>
        <link rel="apple-touch-icon" href="paint.png" />
        <link rel="icon" href="paint.png" />
      </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
