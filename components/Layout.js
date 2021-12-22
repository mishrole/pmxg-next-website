import Header from './Header';
import Footer from './Footer';
import { useTranslation } from "next-i18next";
import Head from 'next/head';

const Layout = ({ children }) => {
    
    const { t } = useTranslation();

    const headTitle = t('common:head-title');
    const headDescription = t('common:head-description');

    return (
        <>
            <Head>
                <title>{ headTitle }</title>
                <meta name="description" content={ headDescription }></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:site_name" content="PMXG"></meta>
                <link rel="icon" href="/assets/favicon/cropped-pmxg-large-logo-2-1-32x32.png" sizes="32x32"></link>
                <link rel="icon" href="/assets/favicon/cropped-pmxg-large-logo-2-1-192x192.png" sizes="192x192"></link>
                <link rel="apple-touch-icon" href="/assets/favicon/cropped-pmxg-large-logo-2-1-180x180.png"></link>
                <meta name="msapplication-TileImage" content="/assets/favicon/cropped-pmxg-large-logo-2-1-270x270.png"></meta>
            </Head>
            <Header translate={t} />
            { children }
            <Footer translate={t} />
        </>
    )
}
export default Layout;