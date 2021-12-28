import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Container, Row, Col, Card } from "react-bootstrap";

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

const Products = () => {
  const { t } = useTranslation();

  const productsTitle = t("products:title");
  const categoriesProducts = t("products:categories", {
    returnObjects: true,
  }).map((element, i) => {
    return (
      <Row key={`categories-wrapper-${i}`}>
        <h1 className={styles.title}>{t(element.title)}</h1>
        {t(`products:categories.${i}.products`, { returnObjects: true }).map(
          (productData, index) => {
            return (
              <Col
                xs={12}
                md={6}
                lg={4}
                className="p-3"
                key={`products-wrapper-${index}`}
              >
                <Card>
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
                    <Card.Title className="text-uppercase text-center fw-bold">
                      <p>{productData.header}</p>
                      <p>{productData.body}</p>
                      <p>{productData.footer}</p>
                    </Card.Title>
                  </Card.Body>
                </Card>
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
