import styled from 'styled-components';
import { useRouter } from 'next/router'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import Link from 'next/link'
import Image from 'next/image';

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

const StyledNavbarToggler = styled(Navbar.Toggle)`
    &:focus {
        box-shadow: none;
    }

    border: none;
`;

const StyledAnchor = styled.a`
    &&& {
        color: #000000;
        font-size: 14px;
        font-weight: bold;
        margin: 0 .5em;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        cursor: pointer;
    }

    &:hover {
        color: rgba(0,0,0,.55);
    }
`;

const StyledAnchorSmall = styled.a`
    position: relative;
    display: block;

    > span {
        min-width: 100px;
    }

`;

const StyledImage = styled(Image)`
    padding: 0 !important;
`

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
                            <StyledAnchorSmall>
                                <StyledImage alt="PMXG Logo" layout="responsive" objectFit="scale-down" width={100} height={50} src="/assets/images/pmxg-large-logo.png"></StyledImage>
                            </StyledAnchorSmall>
                        </Link>
                    </Navbar.Brand>
                    <StyledNavbarToggler aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end my-3 my-lg-0">
                        <Nav navbarScroll>
                            {/* <NavLink className={({ isActive }) => isActive ? "red" : "blue"} /> */}
                            <Link href="/">
                                <StyledAnchor className="nav-link">{t('translation:home')}</StyledAnchor>
                            </Link>
                            <Link href="/about-us">
                                <StyledAnchor className="nav-link">{t('translation:about-us')}</StyledAnchor>
                            </Link>
                            <Link href="/products">
                                <StyledAnchor className="nav-link">{t('translation:products')}</StyledAnchor>
                            </Link>
                            <Link href="/services">
                                <StyledAnchor className="nav-link">{t('translation:services')}</StyledAnchor>
                            </Link>
                            <StyledAnchor className="nav-link" href="https://app.pmxg.com/contact">{t('translation:contact')}</StyledAnchor>
                            <StyledAnchor className="nav-link" href="https://app.pmxg.com/auth">{t('translation:login')}</StyledAnchor>
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
        </>
    )
}

export default Header;