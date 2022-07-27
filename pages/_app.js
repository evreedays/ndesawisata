import App from "next/app";
import "../styles/globals.css";
import Layout from "../components/layout";
import { createContext } from "react";
import { fetchAPI } from "/lib/api";
import { getStrapiMedia } from "/lib/media";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  return (
    <Layout>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </Layout>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  // const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps };
};

export default MyApp;
