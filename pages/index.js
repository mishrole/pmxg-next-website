import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

export async function getStaticProps({ locale }, context) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

const Home = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <DynamicHero />
      <DynamicPMXGBanner translate={t} />

      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <motion.div
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 1.0 }}
            ref={ref}
          >
            {inView ? <DynamicStats translate={t} /> : <p></p>}
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
            {inView ? <DynamicOurServices translate={t} /> : <p></p>}
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
            {inView ? <DynamicKitcoPrices /> : <p></p>}
          </motion.div>
        )}
      </InView>

      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            {inView ? (
              <DynamicContactBanner translate={t} />
            ) : (
              <p></p>
            )}
          </div>
        )}
      </InView>
    </>
  );
};

export default Home;
