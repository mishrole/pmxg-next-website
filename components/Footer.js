<<<<<<< HEAD
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from './../styles/Footer.module.css'
import Link from 'next/link'
import Image from "next/image";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}


const Footer = (props) => {
    const router = useRouter()
    const { locales } = router
    const { t } = useTranslation()

    const changeLanguage = (lang) => {
        router.push(router.pathname, router.pathname, { locale: lang })
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.Content}>
                <div className={styles.grid}>
                    <div className={styles.imageContent}>
                        <Image src="/assets/images/pmxg-footer-icon.png" width={168} height={64} />
                    </div>
                    <div className={styles.textContent}>
                        <p>{t('translation:footer.address')}</p>
                        <p>{t('translation:footer.address_info')}</p>
                        <p>{t('translation:footer.contact-us-here')}</p>
                        <p>{t('translation:footer.phone')}</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.title}>
                        <h5>MENU</h5>
                    </div>
                    <div className={styles.textContentb}>
                        <Link href="/">
                            <a className="header-link nav-link">{t('translation:home')}</a>
                        </Link>
                        <Link href="/products">
                            <a className="header-link nav-link">{t('translation:products')}</a>
                        </Link>
                        <a className="header-link nav-link" href="https://app.pmxg.com/contact">{t('translation:contact')}</a>
                        <Link href="/about-us">
                            <a className="header-link nav-link">{t('translation:about-us')}</a>
                        </Link>
                        <Link href="/services">
                            <a className="header-link nav-link">{t('translation:services')}</a>
                        </Link>

                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.title}>
                        <h5 class="text-uppercase">{t('translation:who-we-are')}</h5>
                    </div>
                    <div>
                        {/* <p className={styles.text}>
                            {t('translation:who-we-are_message')}
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
=======
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image';

const StyledFooter = styled.footer`
    background-color: #1d1d1d;
`;

const StyledImage = styled(Image)`
    padding: 0 !important;
`

const Footer = ({ translate }) => {

    return (

        <>
           <StyledFooter>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Link href="/">
                                <a>
                                    <StyledImage src="/assets/images/pmxg-footer-icon.png" alt="PMXG Logo" layout="responsive" objectFit="scale-down" width={120} height={50}></StyledImage>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                    </Row>
                </Container>     
           </StyledFooter>
        </>
    )
}

export default Footer;
>>>>>>> 9c2c3dd54dbd3d80fab6be6c7757fafaa038592a
