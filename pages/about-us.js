import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { device } from '../util/mediaQueries';
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import styled from 'styled-components';

import styles from './../styles/About-us.module.css';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'about-us']))
        }
    }
}

const StyledContainer = styled(Container)`

    @media ${device.mobileS} {
        &&& > span > span {
            padding: 70% 0 0 !important;
        }
    }

    @media ${device.tablet} {
        &&& > span > span {
            padding: 50% 0 0 !important;
        }
    }
`;

const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>{t('about-us:title')}</title>
            </Head>

            <div className={`${styles.image} mt-5 pt-5`}>
                <h1 className={`${styles.title}`}>{t('about-us:title')}</h1>
            </div>
            
            <Container className="py-5">
                <Row className="py-5">
                    <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center flex-column">
                        {
                            t('about-us:description', { returnObjects: true }).map((element, i) => (
                                
                                    <p key={`description-${i}`}>
                                        {t(element.content)}
                                    </p>
                            ))
                        }
                    </Col>
                    <Col xs={12} lg={6}>
                        <StyledContainer>
                            <Image src="/assets/images/about-us/scientist.jpg" layout="responsive" objectFit="contain" width="200" height="200" />
                        </StyledContainer>
                    </Col>
                    
                </Row>
                {/* <div className={styles.textContainer}>
                    <div className={styles.description}>
                        {
                            t('about-us:description', { returnObjects: true }).map((element, i) => (
                                <p key={`description-${i}`}>
                                    {t(element.content)}
                                </p>
                            ))
                        }
                    </div>

                    <div className={styles.imageContainer}>
                        <Image src="/assets/images/about-us/scientist.jpg" layout="responsive" objectFit="contain" width="200" height="200" />
                    </div>
                </div> */}
            </Container>

            <div className={styles.ourMission}>
                <div className={styles.titles}>
                    <h2>{t('about-us:mission.title')}</h2><br />
                    <h3>{t('about-us:mission.subtitle')}</h3>
                </div>

                <Container>
                    <div className={styles.iconsContainer}>
                        {
                            t('about-us:mission.values', { returnObjects: true }).map((element, i) => (
                                <div className={styles.cardIcon} key={element.title}>
                                    <div className={styles.cardHeader}>
                                        <Image src={element.path} height={50} width={50} />
                                    </div>
                                    <div className={styles.cardBody}>
                                        <h5 className={styles.subtitle}>{t(element.title)}</h5>
                                        <p className={styles.text}>{t(element.subtitle)}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AboutUs;