// import { useState, useEffect } from "react";
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
// import Router from 'next/router';

import Layout from '../components/Layout';
import { LanguageProvider } from '../context/LanguageContext';
// import Loader from '../components/Loader';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min');
    }, []);

    // Router.events.on('routeChangeStart', (url) => {
    //     console.log("start")
    //     setLoading(true);
    // });

    // Router.events.on('routeChangeComplete', (url) => {
    //     console.log("complete")
    //     setLoading(false);
    // });

    return (
        <>
            <LanguageProvider>
                <Layout>
                    {/* {
                        loading && <Loader />
                    } */}
                    <Component {...pageProps} />
                </Layout>
            </LanguageProvider>
        </>
    )
}

export default appWithTranslation(MyApp);