import dynamic from 'next/dynamic';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from 'next/head';
import { Loader } from '../components/Loader';

import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { OurServices } from '../components/home/OurServices';
import { KitcoPrices } from '../components/home/KitcoPrices';
import { ContactBanner } from '../components/home/ContactBanner';

// const DynamicHero = dynamic(() => import('../components/home/Hero').then((mod) => mod.Hero))
// const DynamicStats = dynamic(() => import('../components/home/Stats').then((mod) => mod.Stats))
// const DynamicOurServices = dynamic(() => import('../components/home/OurServices').then((mod) => mod.OurServices))
// const DynamicKitcoPrices = dynamic(() => import('../components/home/KitcoPrices').then((mod) => mod.KitcoPrices))
// const DynamicContactBanner = dynamic(() => import('../components/home/ContactBanner').then((mod) => mod.ContactBanner))

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const Home = (props) => {

    const { t } = useTranslation();
    const headTitle = t('translation:head-title');
    const headDescription = t('translation:head-description');

    return (
        <>
            <Head>
                <title>{ headTitle }</title>
                <meta name="description" content={ headDescription }></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:site_name" content="PMXG"></meta>
                <link rel="icon" href="/assets/images/icon/cropped-pmxg-large-logo-2-1-32x32.png" sizes="32x32"></link>
                <link rel="icon" href="/assets/images/icon/cropped-pmxg-large-logo-2-1-192x192.png" sizes="192x192"></link>
                <link rel="apple-touch-icon" href="/assets/images/icon/cropped-pmxg-large-logo-2-1-180x180.png"></link>
                <meta name="msapplication-TileImage" content="/assets/images/icon/cropped-pmxg-large-logo-2-1-270x270.png"></meta>
            </Head>
            {/* <DynamicHero />
            <DynamicStats />
            <DynamicOurServices />
            <DynamicKitcoPrices />
            <DynamicContactBanner /> */}
            <Hero />
            <Stats />
            <OurServices />
            <KitcoPrices />
            <ContactBanner />
            
            
        </>
        
    )
}

export default Home;