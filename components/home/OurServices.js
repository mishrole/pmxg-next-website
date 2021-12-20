import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card } from "react-bootstrap";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const StyledCard = styled(Card)`
    box-shadow: 0 10px 20px rgb(0 0 0 / 5%);
    border: none;
    border-radius: 3px;
`;

const services = [
    {
        "image": "./assets/images/our-services/DSC_0178.jpg"
    },
    {
        "image": "./assets/images/our-services/DSC_0251.jpg"
    },
    {
        "image": "./assets/images/our-services/DSC_0112.jpg"
    }
]

export const OurServices = (props) => {

    const { t } = useTranslation();

    return (
        <>
            <Container>
                <Row className="text-center">
                    <h1>{t("translation:our-services")}</h1>
                    <p>{t("translation:our-services_message")}</p>
                </Row>
                <Row className="text-center p-2">
                    {
                        services.map(({ image }, index) => (
                            <Col xs={12} md={4} className="p-3" key={`service-wrapper-${index}`}>
                                <StyledCard key={`service-card-${index}`}>
                                    <Card.Img variant="top" src={image} key={`service-card-image-${index}`} />
                                    <Card.Body key={`service-card-body-${index}`}>
                                        <Card.Title key={`service-card-title-${index}`}>{ t(`translation:services-list.${index}.title`) }</Card.Title>
                                        {
                                            t(`translation:services-list.${index}.subtitle`, {returnObjects: true}).map((element, i) => (
                                                <Card.Text key={`service-card-item-${index}-${i}`}>
                                                    {element.content}
                                                </Card.Text>
                                            ))
                                        }
                                    </Card.Body>
                                </StyledCard>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}