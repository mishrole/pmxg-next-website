import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const StyledNavbar = styled(Navbar)`
  box-shadow: 0 7px 15px -7px rgb(0 0 0 / 4%);
  margin-bottom: 20px;
  padding: 20px 0;
`;

const StyledButton = styled.button`
  &:focus {
    box-shadow: none;
  }

  > span {
    width: 20px !important;
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
    transform: translateZ(0);
  }

  &&&.nav-link:hover {
    color: var(--bs-dark);
  }

  &&&.nav-link.active {
    color: var(--bs-dark);
  }
`;

const StyledAnchorPMXGLogo = styled.a`
  display: block;
  position: relative;

  &&&:hover {
    cursor: pointer;
  }
  
  > span {
    min-width: 100px;
  }
`;

const StyledAnchorLanguage = styled.a`
  display: block;
  position: relative;
  margin: 0 0.5em;

  &&&:hover {
    cursor: pointer;
  }
  
  > span {
    width: 25px !important;
  }
`;

const StyledLanguageContainer = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  padding: 0 !important;
`;

// const StyledLanguageIcon = styled.i`
//   cursor: initial;
//   filter: saturate(0);

//   &&&.active {
//     cursor: pointer;
//     filter: saturate(1);
//   }
// `;

const StyledLanguageImage = styled(Image)`
  cursor: initial;
  filter: saturate(0);

  &&&.active {
    cursor: pointer;
    filter: saturate(1);
  }
`;

const Header = ({ translate, i18n }) => {
  // Switch Language Icon Style on Header
  const { language, nextLanguage } = useContext(LanguageContext);

  const router = useRouter();
  const { locales, pathname, asPath, query } = router;

  // console.log(language);

  // const selectLanguage = lng => {

  //   setLanguage(lng);
  //   // i18n.changeLanguage(lng, (element, err) => {
  //   //   err();
  //   // });
  //   // router.push(router.asPath, router.asPath, { locale: language });

    
  //   // change just the locale and maintain all other route information including href's query
  //   // router.push({ pathname, query }, asPath, { locale: lng, scroll: false })
  // }

  // console.log(locales);

  // console.log('router.locale: ' + router.locale);
  // console.log(`current lang: ${i18n.language}`);

  const home = translate("common:home");
  const about = translate("common:about-us");
  const products = translate("common:products");
  const services = translate("common:services");
  const contact = translate("common:contact");
  const login = translate("common:login");

  const languagesButtons = locales.map((locale, index) => {
    return (
      <StyledButton
        aria-label={`language-${locale}`}
        className="btn"
        key={locale}
        onClick={async () => { await nextLanguage(locale)}}
        // onClick={() => {
        //   i18n.changeLanguage(locale);
        //   // console.log('locale clickado', locale)
        //   // setLanguage(locale);
        //   // console.log(`${locale} vs ${i18n.language}`)
        // }}
      >
        {/* <StyledLanguageIcon
          className={`flag-icon flag-icon-${locale === "en" ? "us" : locale}${
            language === locale ? "" : " active"
          }`}
        ></StyledLanguageIcon> */}
        <StyledLanguageImage
        src={`/assets/icons/${locale}.svg`}
        alt={`Language ${locale}`}
        layout="responsive"
        objectFit="contain"
        width={20}
        height={20}
        sizes="2vw"
        loading="eager"
        className={`${language === locale ? "" : "active"}`}></StyledLanguageImage>

      </StyledButton>




      // <Link key={`language-${locale}`} href={router.asPath} locale={locale} onClick={() => selectLanguage(locale)} scroll={false}>
      //   <StyledAnchorLanguage className="nav-link">
      //     <StyledLanguageImage
      //     src={`/assets/icons/${locale}.svg`}
      //     alt={`Language ${locale}`}
      //     layout="responsive"
      //     objectFit="contain"
      //     width={20}
      //     height={20}
      //     sizes="2vw"
      //     loading="eager"
      //     className={`${language === locale ? "" : "active"}`}></StyledLanguageImage>
      //   </StyledAnchorLanguage>
      // </Link>
    );
  });

  return (
    <>
      <StyledNavbar bg="white" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/" locale={language}>
              <StyledAnchorPMXGLogo>
                <StyledImage
                  alt="PMXG Logo"
                  layout="responsive"
                  objectFit="scale-down"
                  width={100}
                  height={50}
                  src="/assets/images/pmxg-large-logo.png"
                  loading="eager"
                  sizes="30vw"
                  priority
                ></StyledImage>
              </StyledAnchorPMXGLogo>
            </Link>
          </Navbar.Brand>
          <StyledNavbarToggler aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className={`justify-content-lg-end my-3 my-lg-0`}
          >
            <Nav navbarScroll>
              <Link href="/" locale={language}>
                <StyledAnchor
                  className={
                    router.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  {home}
                </StyledAnchor>
              </Link>
              <Link href="/about-us" locale={language}>
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
              <Link href="/products" locale={language}>
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
              <Link href="/services" locale={language}>
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

              <StyledLanguageContainer>
                {languagesButtons}
              </StyledLanguageContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default Header;
