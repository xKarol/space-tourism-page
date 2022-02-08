import Head from "next/head";
import styles from "../styles/styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#0b0d17" />
        <title>Space Tourism</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
