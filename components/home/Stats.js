import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const StyledAnchor = styled.a`
  position: relative;

  > span {
    max-height: 200px;
  }

  > span > span {
    padding: 30% !important;
  }
`;

const StyledImage = styled(Image)`
  padding: 2em !important;
`;

const kitcoChartsMetalsLoader = ({ src }) => {
  return `https://www.kitconet.com/charts/metals/${src}`;
};

const kitcoImages = [
  {
    translation: "home:gold",
    url: "gold/tny_au_en_usoz_2.gif",
    alt: "[Most Recent Quotes from www.kitco.com]",
    connecting: "https://www.kitco.com/connecting.html",
  },
  {
    translation: "home:silver",
    url: "silver/tny_ag_en_usoz_2.gif",
    alt: "[Most Recent Quotes from www.kitco.com]",
    connecting: "https://www.kitco.com/connecting.html",
  },
  {
    translation: "home:platinum",
    url: "platinum/tny_pt_en_usoz_2.gif",
    alt: "[Most Recent Quotes from www.kitco.com]",
    connecting: "https://www.kitco.com/connecting.html",
  },
  {
    translation: "home:palladium",
    url: "palladium/tny_pd_en_usoz_2.gif",
    alt: "[Most Recent Quotes from www.kitco.com]",
    connecting: "https://www.kitco.com/connecting.html",
  },
];

export const Stats = ({ translate }) => {
  const statsList = kitcoImages.map(({ translation, url, alt, connecting }) => {
    return (
      <Col xs={12} md={6} lg={3} className="p-2 d-block" key={translation}>
        <h3>{translate(translation)}</h3>
        <StyledAnchor href={connecting}>
          <StyledImage
            alt={alt}
            loader={kitcoChartsMetalsLoader}
            src={url}
            layout="responsive"
            objectFit="scale-down"
            width={50}
            height={50}
            sizes="50vw"
          />
        </StyledAnchor>
      </Col>
    );
  });

  return (
    <>
      <Container className="py-5 text-center">
        <Row>{statsList}</Row>
      </Container>
    </>
  );
};
