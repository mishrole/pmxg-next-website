import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
// import useInView from 'react-cool-inview';
// import Loader from '../components/Loader';

// const DynamicLoader = dynamic(() => import('../components/Loader').then((mod) => mod.Loader));
const DynamicHero = dynamic(() => import('../components/home/Hero').then((mod) => mod.Hero));
const DynamicStats = dynamic(() => import('../components/home/Stats').then((mod) => mod.Stats));
const DynamicPMXGBanner = dynamic(() => import('../components/home/PMXGBanner').then((mod) => mod.PMXGBanner));
const DynamicOurServices = dynamic(() => import('../components/home/OurServices').then((mod) => mod.OurServices));
const DynamicKitcoPrices = dynamic(() => import('../components/home/KitcoPrices').then((mod) => mod.KitcoPrices));
const DynamicContactBanner = dynamic(() => import('../components/home/ContactBanner').then((mod) => mod.ContactBanner));

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home']))
        }
    }
}

const Home = () => {

    const { t } = useTranslation();

    // const { observe, inView } = useInView({
    //     unobserveOnEnter: true,
    //     rootMargin: "-50px 0px",
    // });

    // console.log(observe);

    return (
        <>
            {/* 
                TODO: [OPTIMIZE] Lightouse performance 31 (21/12/2021)
                    - First Contentful Paint: 0.7 s                 ✅
                    - Speed Index: 3.0 s                            ❌
                    - Largest Contentful Paint: 5.8 s               ❌
                    - Time to Interactive: 6.2 s                    ❌
                    - Total Blocking Time: 3,000 ms                 ❌
                    - Cumulative Layout Shift: 0                    ✅
            */}

            <DynamicHero />
            <DynamicPMXGBanner translate={t} />
            <DynamicStats translate={t} />
            <DynamicOurServices translate={t} />
            <DynamicKitcoPrices />
            <DynamicContactBanner translate={t} />
            
            {/* <div ref={ observe }>
                <DynamicStats translate={t} />
            </div>
            {
                inView && <>
                    <DynamicOurServices translate={t} />
                    <DynamicKitcoPrices />
                    <DynamicContactBanner translate={t} />
                </>
            } */}
        </>
    )
}

export default Home;