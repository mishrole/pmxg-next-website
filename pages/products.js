import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Container, Row, Col, Card } from "react-bootstrap";
import { device } from "./../util/mediaQueries";

import styles from "./../styles/Products.module.css";
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "products"])),
    },
  };
}

const StyledCardHeader = styled(Card.Header)`
  &&& {
    background-color: var(--bs-light);
    border: none;
  }
`;

const StyledCard = styled(Card)`
  border: none;
`;

const StyledCardTitle = styled(Card.Title)`
  @media ${device.mobileS} {
    font-size: 1.1rem !important;
  }

  @media ${device.tablet} {
    font-size: 1.15rem !important;
  }

  @media ${device.laptop} {
    font-size: 1.2rem !important;
  }
`;

const StyledTitle = styled.h1`
  &&& {
    text-transform: uppercase;
    color: var(--bs-dark);
    font-weight: 700;
    padding: 3em 1em 1em;
    text-align: center;
  }

  @media ${device.mobileS} {
    font-size: 1.6rem;
  }

  @media ${device.mobileL} {
    font-size: 1.8rem;
  }

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const Products = () => {
  const { t } = useTranslation();

  const productsTitle = t("products:title");
  const categoriesProducts = t("products:categories", {
    returnObjects: true,
  }).map((element, i) => {
    return (
      <Row key={`categories-wrapper-${i}`}>
        <StyledTitle className={styles.title}>{t(element.title)}</StyledTitle>
        {t(`products:categories.${i}.products`, { returnObjects: true }).map(
          (productData, index) => {
            return (
              <Col
                xs={12}
                md={4}
                lg={4}
                className="p-3"
                key={`products-wrapper-${index}`}
              >
                <StyledCard>
                  <StyledCardHeader>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <Image
                          className="flip-card-front"
                          src={productData.front_image}
                          width={200}
                          height={250}
                          alt=""
                          layout="responsive"
                          objectFit="contain"
                          loading="eager"
                          sizes="50vw"
                        />
                        <div className="flip-card-back">
                          <Image
                            src={productData.back_image}
                            width={200}
                            height={250}
                            alt=""
                            layout="responsive"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>
                  </StyledCardHeader>
                  <Card.Body>
                    <StyledCardTitle className="text-uppercase text-center fw-bold">
                      <p>{productData.header}</p>
                      <p>{productData.body}</p>
                      <p>{productData.footer}</p>
                    </StyledCardTitle>
                  </Card.Body>
                </StyledCard>
              </Col>
            );
          }
        )}
      </Row>
    );
  });

  return (
    <>
      <Head>
        <title>{productsTitle}</title>
      </Head>
      <Container className="my-5 py-5">{categoriesProducts}</Container>
    </>
  );
};

export default Products;
