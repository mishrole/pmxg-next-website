import styled from 'styled-components';
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from 'next/image';

const StyledCard = styled(Card)`
    box-shadow: 0 10px 20px rgb(0 0 0 / 5%);
    border: none;
    border-radius: 3px;
`;

const StyledSubtitle = styled.p`
    font-size: 1.1rem;
`;

const services = [
    {
        "image": "/assets/images/our-services/DSC_0178.jpg"
    },
    {
        "image": "/assets/images/our-services/DSC_0251.jpg"
    },
    {
        "image": "/assets/images/our-services/DSC_0112.jpg"
    }
]

export const OurServices = ({ translate }) => {

    const ourServicesTitle = translate("home:our-services");
    const ourServicesMessage = translate("home:our-services_message");

    const servicesCards = services.map(({ image }, index) => {
        return (
            <Col xs={12} md={4} className="p-3" key={`service-wrapper-${index}`}>
                <StyledCard key={`service-card-${index}`}>
                    <div>
                        <Image priority={index === 0 && true} className="card-img-top" src={image} key={`service-card-image-${index}`} alt="" layout="responsive" objectFit="scale-down" width="100" height="65"/>
                    </div>
                    <Card.Body key={`service-card-body-${index}`}>
                        <Card.Title key={`service-card-title-${index}`}>{ translate(`home:services-list.${index}.title`) }</Card.Title>
                        {
                            translate(`home:services-list.${index}.subtitle`, { returnObjects: true }).map((element, i) => (
                                <Card.Text key={`service-card-item-${index}-${i}`}>
                                    {element.content}
                                </Card.Text>
                            ))
                        }
                    </Card.Body>
                </StyledCard>
            </Col>
        )
    });

    return (
        <>
            <Container>
                <Row className="text-center">
                    <h1>{ourServicesTitle}</h1>
                    <StyledSubtitle>{ourServicesMessage}</StyledSubtitle>
                </Row>
                <Row className="text-center p-2">
                    { servicesCards }
                </Row>
            </Container>
        </>
    )
}