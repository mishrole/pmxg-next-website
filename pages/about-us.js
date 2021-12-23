import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { Image } from "react-bootstrap";
import styles from './../styles/About-us.module.css'

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'about-us']))
        }
    }
}

const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Head>
                <title>{t('about-us:title')}</title>
            </Head>
            <div className={styles.image}>
                <h1 className={styles.title}>{t('about-us:title')}</h1>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.description}>
                    {
                        t('about-us:description', { returnObjects: true }).map((element, i) => (
                            <p>
                                {t(element.content)}
                            </p>
                        ))
                    }
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/assets/images/about-us/scientist.jpg" layout="responsive" />
                </div>
            </div>

            <div className={styles.ourMission}>
                <div className={styles.titles}>
                    <h2>{t('about-us:mission.title')}</h2><br />
                    <h3>{t('about-us:mission.subtitle')}</h3>
                </div>

                <div className={styles.iconsContainer}>
                    {
                        t('about-us:mission.values', { returnObjects: true }).map((element, i) => (
                            <div className={styles.cardIcon} key={element.title}>
                                <div className={styles.cardHeader}>
                                    <i className={element.icon}></i>
                                </div>
                                <div className={styles.cardBody}>
                                    <h4 className={styles.subtitle}>{t(element.title)}</h4>
                                    <p className={styles.text}>{t(element.subttitle)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>



    )
}

export default AboutUs;