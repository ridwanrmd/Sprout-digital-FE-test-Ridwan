import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content="Most reliable informnation about pokemon"
        />
        <link rel="Pokedex icon" href="/pokedex.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
