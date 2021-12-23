import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";

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
    color: var(--bs-dark-shadow);
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin: 0 0.5em;
    text-transform: uppercase;
  }

  &&&:hover {
    color: var(--bs-dark);
  }

  &&&.active {
    color: var(--bs-dark);
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
`;

const StyledLanguageIcon = styled.i`
  filter: saturate(0);
  cursor: pointer;

  &&&.active {
    filter: saturate(1);
    cursor: initial;
  }
`;

const Header = ({ translate }) => {
  const { language, setLanguage, menuOpen, setMenuOpen } = useContext(LanguageContext);

  const router = useRouter();
  const { locales } = router;

  const home = translate("common:home");
  const about = translate("common:about-us");
  const products = translate("common:products");
  const services = translate("common:services");
  const contact = translate("common:contact");
  const login = translate("common:login");

  const testElement = useRef();

  async function changeLanguage(lang) {
    setLanguage(lang);
    setMenuOpen(testElement.current.className.includes('show'));
    console.log(testElement.current.className.includes('show'));

    router.replace(router.pathname, router.pathname, {
      locale: lang,
      scroll: false,
    });

    // router.replace(router.pathname, router.pathname, {locale: lang, scroll: false}, { shallow: true })
  }

  const languagesButtons = locales.map((locale, index) => {
    return (
      <Link href="" key={`link-language-${locale}-${index}`} scroll={false}>
        <StyledAnchor
        key={`language-${locale}`}
        className="nav-link"
        onClick={() => changeLanguage(locale)}
      >
        <StyledLanguageIcon
          className={`flag-icon flag-icon-${
            locale === "en" ? "us" : locale
          }${language === locale ? " active" : ""}`}
        ></StyledLanguageIcon>
      </StyledAnchor>
    </Link>
    )
  });
  
    // const NavbarToggler = (e) => {
    //   // testElement.current.className = menuOpen;
    //   // setMenuOpen(testElement.current.className.includes('show'));
    // }
  
  return (
    <>
      <StyledNavbar bg="white" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <StyledAnchorSmall>
                <StyledImage
                  alt="PMXG Logo"
                  layout="responsive"
                  objectFit="scale-down"
                  width={100}
                  height={50}
                  src="/assets/images/pmxg-large-logo.png"
                  // loading="lazy"
                  priority
                ></StyledImage>
              </StyledAnchorSmall>
            </Link>
          </Navbar.Brand>
          {/* <StyledNavbarToggler aria-controls="navbarScroll" onClick={(e) => NavbarToggler(e)}/> */}
          <StyledNavbarToggler aria-controls="navbarScroll"/>
          <Navbar.Collapse
            id="navbarScroll"
            className={`justify-content-lg-end my-3 my-lg-0${menuOpen ? ' show' : ''}`}
            ref={testElement}
          >
            <Nav navbarScroll>
              <Link href="/">
                <StyledAnchor
                  className={
                    router.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  {home}
                </StyledAnchor>
              </Link>
              <Link href="/about-us">
                <StyledAnchor
                  className={
                    router.pathname === "/about-us"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {about}
                </StyledAnchor>
              </Link>
              <Link href="/products">
                <StyledAnchor
                  className={
                    router.pathname === "/products"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {products}
                </StyledAnchor>
              </Link>
              <Link href="/services">
                <StyledAnchor
                  className={
                    router.pathname === "/services"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {services}
                </StyledAnchor>
              </Link>
              <StyledAnchor
                className="nav-link"
                href="https://app.pmxg.com/contact"
              >
                {contact}
              </StyledAnchor>
              <StyledAnchor
                className="nav-link"
                href="https://app.pmxg.com/auth"
              >
                {login}
              </StyledAnchor>

              { languagesButtons }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default Header;
