import { useRouter } from 'next/router'
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Link from 'next/link'
import styled from 'styled-components';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const StyledNavbar = styled(Navbar)`
    margin-bottom: 20px;
    padding: 20px 0;
    box-shadow: 0 7px 15px -7px rgb(0 0 0 / 4%);
`;

const StyledButton = styled(Button)`
    &:focus {
        box-shadow: none;
    }
`;

const Header = (props) => {
    const router = useRouter()
    const { locales } = router
    const { t } = useTranslation()

    const changeLanguage = (lang) => {
        router.push(router.pathname, router.pathname, { locale: lang })
    }

    return (

        <>
            <StyledNavbar bg="white" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Link href="/">
                            <a><img src="/assets/images/pmxg-large-logo.png" alt="PMXG Logo" width="120px" /></a>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end my-3 my-lg-0">
                        <Nav navbarScroll>
                            {/* <NavLink className={({ isActive }) => isActive ? "red" : "blue"} /> */}
                            <Link href="/">
                                <a className="header-link nav-link">{t('translation:home')}</a>
                            </Link>
                            <Link href="/about-us">
                                <a className="header-link nav-link">{t('translation:about-us')}</a>
                            </Link>
                            <Link href="/products">
                                <a className="header-link nav-link">{t('translation:products')}</a>
                            </Link>
                            <Link href="/services">
                                <a className="header-link nav-link">{t('translation:services')}</a>
                            </Link>
                            <a className="header-link nav-link" href="https://app.pmxg.com/contact">{t('translation:contact')}</a>
                            <a className="header-link nav-link" href="https://app.pmxg.com/auth">{t('translation:login')}</a>
                            {

                                locales.map((locale) => (
                                    <StyledButton aria-label={`Set language to ${locale}`} variant="button" key={ `language-${locale}` } className="mx-lg-1 text-start text-lg-end" onClick = {
                                        () => changeLanguage(locale)
                                    }>
                                        <i className={ `flag-icon flag-icon-${locale === 'en' ? 'us' : locale}` }></i>
                                    </StyledButton>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </StyledNavbar>

            <style jsx>{`
                .header-link {
                    color: #000000;
                    font-size: 14px;
                    font-weight: bold;
                    margin: 0 .5em;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }

                .header-link:hover {
                    color: rgba(0,0,0,.55);
                }
            `}</style>
        </>
    )
}

export default Header;