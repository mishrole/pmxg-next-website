import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const StyledBanner = styled.div`
    background-color: #273e74;
    color: #FFFFFF;
`;

export const ContactBanner = ({ translate }) => {

    const contactTitle = translate('home:contact-title');
    const contactSubtitle = translate('home:contact-subtitle');
    const contactCta = translate('home:contact-cta');

    return (
        <>
            <StyledBanner>
                <Container>
                    <Row className='text-center p-2 align-items-center justify-content-between'>
                        <Col xs={12} md={6} className='p-3'>
                            <p>{contactTitle}</p>
                            <p>{contactSubtitle}</p>
                        </Col>
                        <Col xs={12} md={6} className='p-3'>
                            <a className='btn btn-primary' href='https://app.pmxg.com/contact'>{contactCta}</a>
                        </Col> 
                    </Row>
                </Container>
            </StyledBanner>
        </>
    )
}