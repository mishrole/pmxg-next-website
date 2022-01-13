import React, { useEffect, useState } from "react";
import { appWithTranslation } from "next-i18next";
import { LanguageProvider } from "../context/LanguageContext";
import { Loader } from "../components/Loader";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState('none');

  const router = useRouter();

  useEffect(() => {
    // TODO: Find a better way without setTimeout
    setTimeout(() => {
      setLoading(false);
      setDisplay('block');
    }, 6000);
    import("bootstrap/dist/js/bootstrap.min");
  }, []);

  useEffect(() => {
    const handleShow = (url) => {
      // console.log(url);
      setLoading(true);
      setDisplay('none')
    };

    const handleHide = () => {
      setLoading(false);
      setDisplay('block');
    };

    router.events.on('routeChangeStart', handleShow);
    router.events.on('routeChangeComplete', handleHide);
    router.events.on('routeChangeError', handleHide);

    return () => {
      router.events.off('routeChangeStart', handleShow);
      router.events.off('routeChangeComplete', handleHide);
      router.events.off('routeChangeError', handleHide);
    }
  }, [router]);

  return (
    <>
        <LanguageProvider>
          <Loader loading={loading}/>
          <Layout>
              <Component {...pageProps} display={display} />
          </Layout>
        </LanguageProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
