// import { useState, useEffect } from "react";
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
// import Router from 'next/router';

import '../styles/globals.css';
import Layout from '../components/Layout';
// import Loader from '../components/Loader';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'

function MyApp({ Component, pageProps }) {

    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
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
            <Layout>
                {/* {
                    loading && <Loader />
                } */}
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default appWithTranslation(MyApp);