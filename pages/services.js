import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}


const Services = () => {

    const { t } = useTranslation();

    return (
        <h1>Services</h1>
    )
}

export default Services;