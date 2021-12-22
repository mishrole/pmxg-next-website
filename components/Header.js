import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image';

const StyledNavbar = styled(Navbar)`
    box-shadow: 0 7px 15px -7px rgb(0 0 0 / 4%);
    margin-bottom: 20px;
    padding: 20px 0;
`;

const StyledButton = styled(Button)`
    &:focus {
        box-shadow: none;
    }
`;

const StyledNavbarToggler = styled(Navbar.Toggle)`
    border: none;

    &:focus {
        box-shadow: none;
    }
`;

const StyledAnchor = styled.a`
    &&& {
        color: rgba(0,0,0,.55);
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.5px;
        margin: 0 .5em;
        text-transform: uppercase;
    }

    &&&:hover {
        color: rgba(0,0,0,1);
    }

    &&&.active {
        color: rgba(0,0,0,1);
    }
`;

const StyledAnchorSmall = styled.a`
    display: block;
    position: relative;

    > span {
        min-width: 100px;
    }

`;

const StyledImage = styled(Image)`
    padding: 0 !important;
`

const Header = ({ translate }) => {
    const router = useRouter()
    const { locales } = router

    const home = translate('common:home');
    const about = translate('common:about-us');
    const products = translate('common:products');
    const services = translate('common:services');
    const contact = translate('common:contact');
    const login = translate('common:login');

    async function changeLanguage(lang) {
        router.replace(
            router.pathname,
            router.pathname,
            { locale: lang, scroll: false }
        );
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
                            <Link href="/">
                                <StyledAnchor className={router.pathname === '/' ? 'nav-link active' : 'nav-link'}>{home}</StyledAnchor>
                            </Link>
                            <Link href="/about-us">
                                <StyledAnchor className={router.pathname === '/about-us' ? 'nav-link active' : 'nav-link'}>{about}</StyledAnchor>
                            </Link>
                            <Link href="/products">
                                <StyledAnchor className={router.pathname === '/products' ? 'nav-link active' : 'nav-link'}>{products}</StyledAnchor>
                            </Link>
                            <Link href="/services">
                                <StyledAnchor className={router.pathname === '/services' ? 'nav-link active' : 'nav-link'}>{services}</StyledAnchor>
                            </Link>
                            <StyledAnchor className="nav-link" href="https://app.pmxg.com/contact">{contact}</StyledAnchor>
                            <StyledAnchor className="nav-link" href="https://app.pmxg.com/auth">{login}</StyledAnchor>
                            {

                                locales.map((locale) => (
                                    <StyledButton aria-label={`Set language to ${locale}`} variant="link" key={ `language-${locale}` } className="mx-lg-1 text-start text-lg-end" onClick = {
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