import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KraftiHub</title>
        <meta name="description" content="Custom gifts and personalized products" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}