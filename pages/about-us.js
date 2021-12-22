import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

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
        <h1>{t('about-us:title')}</h1>
    )
}

export default AboutUs;