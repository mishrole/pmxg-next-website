import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styles from './../styles/Products.module.css'
import Head from "next/head";
import Image from "next/image";
import { Button } from "react-bootstrap";

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
        <div className={styles.container}>
            <Head>
                <title>{t('translation:products')}</title>
            </Head>
            <h1 className={styles.title}>{t('translation:sell-gold-silver')}</h1>
            <div className={styles.flex}>
                <div className={styles.content}>
                    <div>
                        <Image
                            src="/assets/images/products/gold_200x400.jpg"
                            width={200} height={400} />
                    </div>
                    <div className={styles.buttons}>
                        <Button variant="light">
                            {t('translation:obverse')}
                        </Button>
                        <Button variant="light">
                            {t('translation:reverse')}
                        </Button>
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <Image
                            src="/assets/images/products/silver.jpg"
                            width={200} height={400} />
                    </div>
                    <div className={styles.buttons}>
                        <Button variant="light">
                            {t('translation:obverse')}
                        </Button>
                        <Button variant="light">
                            {t('translation:reverse')}
                        </Button>
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <Image
                            src="/assets/images/products/silver1.jpg"
                            width={200} height={400} />
                    </div>
                    <div className={styles.buttons}>
                        <Button variant="light">
                            {t('translation:obverse')}
                        </Button>
                        <Button variant="light">
                            {t('translation:reverse')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products;