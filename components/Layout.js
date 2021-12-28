import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
// import Router from "next/router";
import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import { ArrowUp } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";

// Router.onRouteChangeStart = url => {
//   console.log(url);
// }
const StyledTopButton = styled.button`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  background-color: rgba(55, 55, 55, 0.4);
  padding: 1.2rem;
  border-radius: 100%;
  border:none;
  align-items: center;

  &:hover {
    background-color: var(--bs-primary-dark);
    transition: 0.5s all ease
  }
`;

const StyledArrow = styled(ArrowUp)`
  transition: 0.25s all;
  -ms-transition: 0.25s;
  -moz-transition: 0.25s;
  -o-transition: 0.25s;
  -webkit-transition: 0.25s;
`;

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();

  const headTitle = t("common:head-title");
  const headDescription = t("common:head-description");

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 5000,
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDescription}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="PMXG"></meta>
        <link
          rel="icon"
          href="/assets/favicon/cropped-pmxg-large-logo-2-1-32x32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          href="/assets/favicon/cropped-pmxg-large-logo-2-1-192x192.png"
          sizes="192x192"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/assets/favicon/cropped-pmxg-large-logo-2-1-180x180.png"
        ></link>
        <meta
          name="msapplication-TileImage"
          content="/assets/favicon/cropped-pmxg-large-logo-2-1-270x270.png"
        ></meta>
      </Head>
      <Header translate={t} i18n={i18n} />
      {children}
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            {inView ? <Footer translate={t} /> : <p>Cargando...</p>}
          </div>
        )}
      </InView>
      {
        isVisible && (
          <StyledTopButton className="" onClick={scrollToTop}>
            <StyledArrow color="white" size={18} />
          </StyledTopButton>
        )
      }
    </>
  );
};

export default Layout;
