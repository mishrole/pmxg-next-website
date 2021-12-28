import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { device } from "../util/mediaQueries";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "./../styles/About-us.module.css";

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

const StyledIconsWrapper = styled.div`
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr) !important;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr) !important;
  }
`;

const AboutUs = (props) => {
  const { t } = useTranslation();
  console.log('aboutusprops: ',props);

  const aboutUsTitle = t("about-us:title");
  const aboutUsMissionTitle = t("about-us:mission.title");
  const aboutUsMissionSubtitle = t("about-us:mission.subtitle");
  const descriptionList = t("about-us:description", {
    returnObjects: true,
  }).map((element, i) => {
    return <p key={`about-us_description-${i}`}>{t(element.content)}</p>;
  });
  const missionValues = t("about-us:mission.values", {
    returnObjects: true,
  }).map((element, i) => {
    return (
      <div className={styles.cardIcon} key={element.title}>
        <div className={styles.cardHeader}>
          <Image src={element.path} height={50} width={50} />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.subtitle}>{t(element.title)}</h5>
          <p className={styles.text}>{t(element.subtitle)}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>{aboutUsTitle}</title>
      </Head>

      <div className={`${styles.image} mt-5 pt-5`}>
        <h1 className={`${styles.title}`}>{aboutUsTitle}</h1>
      </div>

      <Container className="py-5">
        <Row className="py-5">
          <Col
            xs={12}
            lg={6}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            {descriptionList}
          </Col>
          <Col xs={12} lg={6}>
            <StyledContainer>
              <Image
                src="/assets/images/about-us/scientist.jpg"
                layout="responsive"
                objectFit="contain"
                width="200"
                height="200"
                loading="eager"
                sizes="50vw"
              />
            </StyledContainer>
          </Col>
        </Row>
      </Container>

      <div className={styles.ourMission}>
        <div className={styles.titles}>
          <h2>{aboutUsMissionTitle}</h2>
          <br />
          <h3>{aboutUsMissionSubtitle}</h3>
        </div>

        <Container>
          <StyledIconsWrapper className={styles.iconsContainer}>
            {missionValues}
          </StyledIconsWrapper>
        </Container>
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about-us", "common"])),
    },
  };
}

export default AboutUs;
