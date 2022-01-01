import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const StyledImageContainer = styled.div`
  height: calc(100vh - 100px);
  position: relative;
  z-index: 1;
`;

const StyledMessageContainer = styled.div`
  color: var(--bs-light);
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const StyledOverlay = styled.div`
  background: #002764;
  height: calc(100vh - 100px);
  opacity: 0.9;
  position: absolute;
  top: 100px;
  width: 100%;
  z-index: 2;
`;

const StyledCtaAnchor = styled.a`
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
    margin: 4em auto !important;
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

const NotFound = () => {
  const { t } = useTranslation();

  const { language, nextLanguage } = useContext(LanguageContext);

  const errorTitle = t("common:error.title");
  const errorSubtitle = t("common:error.subtitle");
  const bactToHomeCta = t("common:error.back-cta");

  return (
    <>
      <Head>
        <title>PMXG | {errorTitle}</title>
      </Head>
      <Container fluid className="mt-5 pt-5 mx-0 px-0">
        <Row>
          <Col xs={12}>
            <StyledMessageContainer>
              <h1>{errorTitle}</h1>
              <h2>{errorSubtitle}</h2>
              <Link href="/" locale={language}>
              <StyledCtaAnchor
                className="btn btn-primary d-flex justify-content-center align-items-center"
              >
                {bactToHomeCta}
              </StyledCtaAnchor>
              </Link>
            </StyledMessageContainer>
          </Col>
        </Row>
        <StyledImageContainer>
          <Image
            src={"/assets/images/404/page-404.jpg"}
            alt={"Error not found"}
            layout="fill"
            objectFit="cover"
            sizes="70vw"
            loading="eager"
            priority={true}
          ></Image>
        </StyledImageContainer>
        <StyledOverlay></StyledOverlay>
      </Container>
    </>
  );
};

export default NotFound;
