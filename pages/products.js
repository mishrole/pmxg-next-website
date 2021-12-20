import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const Products = () => {

    const { t } = useTranslation();

    return (
        <h1>Products</h1>
        
    )
}

export default Products;