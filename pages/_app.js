import "../styles/globals.css";
import "../styles/tailwind.css";
import "tailwindcss/tailwind.css";
import "../styles/main_custom.css";
import Layout from "../components/Layout";
import Head from "next/head";
import "next-pagination/dist/index.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="lazyOnload">
        {`  
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato"
          key="Lato"
        />
         <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter"
          key="Inter"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins"
          key="Poppins"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
