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
                <title>{t('translation:about-us')}</title>
            </Head>
            <div className={styles.image}>
                <h1 className={styles.title}>{t('translation:about-us')}</h1>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.description}>
                    <p>
                        {t('translation:description_v1')}
                    </p>
                    <p>
                        {t('translation:description_v2')}
                    </p>
                    <p>
                        {t('translation:description_v3')}
                    </p>

                </div>

                <div className={styles.imageContainer}>
                    <Image src="/assets/images/about-us/scientist.jpg" layout="responsive" />
                </div>
            </div>

            <div className={styles.ourMission}>
                <div className={styles.titles}>
                    <h2>{t('translation:our-mission')}</h2><br />
                    <h3>{t('translation:offer-clients')}</h3>
                </div>

                <div className={styles.iconsContainer}>
                    <div className={styles.cardIcon}>
                        <div className={styles.cardHeader}>
                            <i class='bx bx-star' ></i>
                        </div>
                        <div className={styles.cardBody}>
                            <h4 className={styles.subtitle}>{t('translation:transparency')}</h4>
                            <p className={styles.text}>{t('translation:transparency-message')}</p>
                        </div>
                    </div>
                    <div className={styles.cardIcon}>
                        <div className={styles.cardHeader}>
                            <i class='bx bx-lock'></i>
                        </div>
                        <div className={styles.cardBody}>
                            <h4 className={styles.subtitle}>{t('translation:security')}</h4>
                            <p className={styles.text}>{t('translation:security-message')}</p>
                        </div>
                    </div>
                    <div className={styles.cardIcon}>
                        <div className={styles.cardHeader}>
                            <i class='bx bx-like'></i>
                        </div>
                        <div className={styles.cardBody}>
                            <h4 className={styles.subtitle}>{t('translation:service')}</h4>
                            <p className={styles.text}>{t('translation:service-message')}</p>
                        </div>
                    </div>
                    <div className={styles.cardIcon}>
                        <div className={styles.cardHeader}>
                            <i class='bx bxs-key'></i>
                        </div>
                        <div className={styles.cardBody}>
                            <h4 className={styles.subtitle}>{t('translation:cost-effectiveness')}</h4>
                            <p className={styles.text}>{t('translation:cost-effectiveness-message')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AboutUs;