import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled from 'styled-components';
import { device } from '../util/mediaQueries';
import { Container, Row, Col } from "react-bootstrap";

import styles from './../styles/About-us.module.css';
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'services']))
        }
    }
}




const Services = () => {

    const { t } = useTranslation();

    const servicesTitle = t('services:title');
    const ourServiceTitle = t('services:description.our-service');
    const ourServiceContent = t('services:description.subtitle');

    const description = t('services:description.values', { returnObjects: true }).map((element, i) => {
        return (
            <div className={styles.card} key={element.title}>
                <div className={styles.cardHeader}>
                    <Image src={element.image} width={50} height={50} />
                </div>
                <div className={styles.cardBody}>
                    <h3 className={styles.title}>
                        {t(element.title)}
                    </h3>
                    <p className={styles.text}>
                        {t(element.sub_description_1)}
                    </p>
                    <p className={styles.text}>
                        {t(element.sub_description_2)}
                    </p>
                </div>
            </div>
        )
    });

    return (
        <>
            <Head>
                <title>
                    {servicesTitle}
                </title>
            </Head>

            {/* <div className={`${styles.image} mt-5 pt-5`}>
                <h1 className={`${styles.title}`}>
                    {ourServiceTitle}
                </h1>
            </div>

            <Container className="py-5">
                {description}
            </Container> */}
        </>
    )
}

export default Services;