import "../styles/globals.css";
// import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <title>Next.js App</title>
      </Head> */}
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
