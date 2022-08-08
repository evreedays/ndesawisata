import App from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import Layout from "../components/layout";
import { createContext } from "react";
import { fetchAPI } from "/lib/api";
import { getStrapiMedia } from "/lib/media";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: false,
      mirror: false,
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
    });
  });
  return (
    <Layout>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </Layout>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  // const globalRes = await fetchAPI("/global", {
  //   populate: {
  //     favicon: "*",
  //     defaultSeo: {
  //       populate: "*",
  //     },
  //   },
  // });
  // // Pass the data to our page via props
  return { ...appProps };
};

export default MyApp;
