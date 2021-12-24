import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled from 'styled-components';
import { device } from '../util/mediaQueries';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import styles from './../styles/Services.module.css';
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'services']))
        }
    }
}


const StyledCtaButton = styled.a`
    &&& {
        background: var(--bs-light);
        border: 2px solid var(--bs-light);
        border-radius: 25px;
        box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
        color: var(--bs-dark);
        display: block;
        font-size: 12px !important;
        font-weight: bold !important;
        height: 50px;
        letter-spacing: 1px;
        line-height: 48px;
        margin: auto;
        transition: 0.3s !important;
        text-align: center;
        text-transform: uppercase;
        width: 200px;
        -ms-transition: 0.3s !important;
        -moz-transition: 0.3s !important;
        -o-transition: 0.3s !important;
        -webkit-transition: 0.3s !important;
    }
  
    &&&:hover {
        background: none;
        color: var(--bs-light);
    }
`;


const Services = () => {

    const { t } = useTranslation();

    const servicesTitle = t('services:title');
    const ourServiceTitle = t('services:description.our-service');
    const ourServiceContent = t('services:description.subtitle');

    const questiontTitle = t('services:question')
    const contact = t('services:question_text')
    const cta = t('services:cta')

    const description = t('services:description.values', { returnObjects: true }).map((element, i) => {
        return (
            <Row className={styles.row}>
                <Col>
                    <Card className={styles.card}>
                        <Card.Img variant="top" src={element.image} />
                        <Card.Body className={styles.cardBody}>
                            <Card.Title className={styles.cardTitle}>{t(element.title)}</Card.Title>
                            <Card.Text className={styles.cardText}>
                                {t(element.sub_description_1)}
                            </Card.Text>
                            <Card.Text className={styles.cardText}>
                                {t(element.sub_description_2)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    });

    return (
        <>
            <Head>
                <title>
                    {servicesTitle}
                </title>
            </Head>
            <div className={`${styles.image} mt-5 pt-5`}>
                <h1 className={`${styles.title}`}>
                    {servicesTitle}
                </h1>
            </div>

            <div className={styles.ourServices}>
                <div className={styles.titles}>
                    <h2>{ourServiceTitle}</h2><br />
                    <h3>{ourServiceContent}</h3>
                </div>
                <Container className={`${styles.containerCards} py-5`}>
                    {description}
                </Container>
            </div>

            <div className={styles.contact}>
                <div className={styles.subtitles}>
                    <h2>
                        {questiontTitle}
                    </h2>
                    <h5>{contact}</h5>
                </div>

                <StyledCtaButton className='btn btn-primary d-flex justify-content-center align-items-center mt-5' href='https://app.pmxg.com/contact'>
                    {cta}
                </StyledCtaButton>
            </div>

        </>
    )
}

export default Services;