import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

// const DynamicLoader = dynamic(() => import('../components/Loader').then((mod) => mod.Loader));
const DynamicHero = dynamic(() =>
  import("../components/home/Hero").then((mod) => mod.Hero)
);
const DynamicStats = dynamic(() =>
  import("../components/home/Stats").then((mod) => mod.Stats)
);
const DynamicPMXGBanner = dynamic(() =>
  import("../components/home/PMXGBanner").then((mod) => mod.PMXGBanner)
);
const DynamicOurServices = dynamic(() =>
  import("../components/home/OurServices").then((mod) => mod.OurServices)
);
const DynamicKitcoPrices = dynamic(() =>
  import("../components/home/KitcoPrices").then((mod) => mod.KitcoPrices)
);
const DynamicContactBanner = dynamic(() =>
  import("../components/home/ContactBanner").then((mod) => mod.ContactBanner)
);

const Home = (props) => {
  const { t } = useTranslation();
  console.log('indexprops',props);


  return (
    <>
      {/* 
                TODO: [OPTIMIZE] Lightouse                 (26/12/2021)
                Performance         85
                Accessibillity      100
                Best Practices      100
                SEO                 100

                    - First Contentful Paint: 0.3 s                 ✅
                    - Speed Index: 0.7 s                            ✅
                    - Largest Contentful Paint: 0.9 s               ✅
                    - Time to Interactive: 1.1 s                    ✅
                    - Total Blocking Time: 40 ms                    ✅
                    - Cumulative Layout Shift: 0.903                ❌
            */}

      <DynamicHero />
      <DynamicPMXGBanner translate={t} />

      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <motion.div
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 1.0 }}
            ref={ref}
          >
            {inView ? <DynamicStats translate={t} /> : <p>Cargando...</p>}
          </motion.div>
        )}
      </InView>

      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <motion.div
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 1.0 }}
            ref={ref}
          >
            {inView ? <DynamicOurServices translate={t} /> : <p>Cargando...</p>}
          </motion.div>
        )}
      </InView>

      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <motion.div
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 1.0 }}
            ref={ref}
          >
            {inView ? <DynamicKitcoPrices /> : <p>Cargando...</p>}
          </motion.div>
        )}
      </InView>

      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            {inView ? (
              <DynamicContactBanner translate={t} />
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        )}
      </InView>
    </>
  );
};

export async function getStaticProps({ locale }) {

  // const { default: lngDict = {} } = await import(
  //   `../public/locales/${locale}/home.json`
  // );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // lngDict
    },
  };
}

export default Home;
