import '../styles/globals.css';
import {useEffect} from "react";
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(MyApp);