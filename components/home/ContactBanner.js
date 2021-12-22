import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const StyledBanner = styled.div`
    background-color: var(--bs-primary);
    color: var(--bs-light);
`;

const StyledCtaButton = styled.a`
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
        margin: auto;
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

export const ContactBanner = ({ translate }) => {
    const contactTitle = translate('home:contact-title');
    const contactSubtitle = translate('home:contact-subtitle');
    const contactCta = translate('home:contact-cta');

    return (
        <>
            <StyledBanner className="py-4">
                <Container>
                    <Row className='p-2 align-items-center justify-content-between'>
                        <Col xs={12} md={6} className='p-3 text-md-start text-center'>
                            <p className='text-uppercase fw-bold mb-0'>{contactTitle}</p>
                            <p className='mb-0'>{contactSubtitle}</p>
                        </Col>
                        <Col xs={12} md={6} className='p-3'>
                            <div className="d-flex justify-content-center justify-content-md-end">
                                <StyledCtaButton className='btn btn-primary d-flex justify-content-center align-items-center m-0' href='https://app.pmxg.com/contact'>
                                    {contactCta}
                                </StyledCtaButton>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </StyledBanner>
        </>
    )
}