import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { InView } from 'react-intersection-observer';

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
            
            <InView>
                {({inView, ref, entry}) => (
                    <div ref={ref}>
                        {
                            inView ? <DynamicStats translate={t} /> : <p>Cargando...</p>
                        }
                    </div>
                )}
            </InView>

            <InView>
                {({inView, ref, entry}) => (
                    <div ref={ref}>
                        {
                            inView ? <DynamicOurServices translate={t} /> : <p>Cargando...</p>
                        }
                    </div>
                )}
            </InView>

            <InView>
                {({inView, ref, entry}) => (
                    <div ref={ref}>
                        {
                            inView ? <DynamicKitcoPrices /> : <p>Cargando...</p>
                        }
                    </div>
                )}
            </InView>

            <InView>
                {({inView, ref, entry}) => (
                    <div ref={ref}>
                        {
                            inView ? <DynamicContactBanner translate={t} /> : <p>Cargando...</p>
                        }
                    </div>
                )}
            </InView>
            
        </>
    )
}

export default Home;