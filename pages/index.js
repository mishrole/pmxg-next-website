import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Loader } from '../components/Loader';
import useInView from 'react-cool-inview';

const DynamicHero = dynamic(() => import('../components/home/Hero').then((mod) => mod.Hero), { loading: () => <Loader />});
const DynamicStats = dynamic(() => import('../components/home/Stats').then((mod) => mod.Stats))
const DynamicOurServices = dynamic(() => import('../components/home/OurServices').then((mod) => mod.OurServices))
const DynamicKitcoPrices = dynamic(() => import('../components/home/KitcoPrices').then((mod) => mod.KitcoPrices))
const DynamicContactBanner = dynamic(() => import('../components/home/ContactBanner').then((mod) => mod.ContactBanner))

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home']))
        }
    }
}

const Home = (props) => {

    const { t } = useTranslation();

    // const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    //     threshold: 0.25, // Default is 0
    //     onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
    //       // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
    
    //       unobserve(); // To stop observing the current target element
    //       observe(); // To re-start observing the current target element
    //     },
    //     onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
    //       // Triggered when the target enters the viewport
    //     },
    //     onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
    //       // Triggered when the target leaves the viewport
    //     },
    //     // More useful options...
    //   });
    
    const { observe, inView } = useInView({
        unobserveOnEnter: true,
        rootMargin: "-100px 0px",
    });

    console.log(inView);

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
            <DynamicStats translate={t} />
            <div ref={observe}>
                {
                    inView && <DynamicOurServices translate={t} />
                }
                <DynamicKitcoPrices />
                <DynamicContactBanner translate={t} />
                
            </div>
            
            
        </>
        
    )
}

export default Home;