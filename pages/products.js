import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Button } from "react-bootstrap";

import styles from './../styles/Products.module.css'
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'products']))
        }
    }
}

const Products = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <Head>
                <title>{t('products:products')}</title>
            </Head>
            <h1 className={styles.title}>{t('products:sell-gold-silver')}</h1>
            <div className={styles.flex}>
                <div className={styles.content}>
                    <div>
                        <Image
                            src="/assets/images/products/gold_200x400.jpg"
                            width={200} height={400} />
                    </div>
                    <div className={styles.buttons}>
                        <Button variant="light">
                            {t('products:obverse')}
                        </Button>
                        <Button variant="light">
                            {t('products:reverse')}
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
                            {t('products:obverse')}
                        </Button>
                        <Button variant="light">
                            {t('products:reverse')}
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
                            {t('products:obverse')}
                        </Button>
                        <Button variant="light">
                            {t('products:reverse')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products;