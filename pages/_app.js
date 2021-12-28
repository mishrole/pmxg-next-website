import { useEffect, useContext } from "react";
import { appWithTranslation } from "next-i18next";
import { LanguageProvider } from "../context/LanguageContext";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
// import "flag-icon-css/css/flag-icons.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min");
  }, []);

  return (
    <>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
