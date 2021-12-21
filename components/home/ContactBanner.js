import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const StyledBanner = styled.div`
    background-color: #273e74;
    color: #FFFFFF;
`;

export const ContactBanner = (props) => {

    const { t } = useTranslation();

    return (
        <>
            <StyledBanner>
                <Container>
                    <Row className="text-center p-2 align-items-center justify-content-between">
                        <Col xs={12} md={6} className="p-3">
                            <p>{t('translation:contact-title')}</p>
                            <p>{t('translation:contact-subtitle')}</p>
                        </Col>
                        <Col xs={12} md={6} className="p-3">
                            <a className="btn btn-primary" href="https://app.pmxg.com/contact">{t('translation:contact')}</a>
                        </Col> 
                    </Row>
                </Container>
            </StyledBanner>
        </>
    )
}