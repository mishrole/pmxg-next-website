import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const StyledWrapper = styled.div`
    padding: 150px 0;
    position: relative;
`;

const StyledContainer = styled(Container)`
    background: #273e74;
    text-align: center;
    color: #FFFFFF;
    padding: 80px 0;

    h2 {
        font-weight: bold;
        margin-bottom: 1em;
    }

    p {
        font-size: 26px;
        padding: 0 2.5em;
        color: rgba(255,255,255,0.9);
        line-height: 35px;
    }
`;

export const Stats = (props) => {
    
    const { t } = useTranslation();

    return (
        <>
            <StyledWrapper name="who-we-are">
                <StyledContainer fluid>
                    <h2>{t('translation:who-we-are')}</h2>
                    <p>{t('translation:who-we-are_message')}</p>
                </StyledContainer>
                <Container className="pt-5 text-center">
                    <Row>
                        <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:gold')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <img src="https://www.kitconet.com/charts/metals/gold/tny_au_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:silver')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <img src="https://www.kitconet.com/charts/metals/silver/tny_ag_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:platinum')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <img src="https://www.kitconet.com/charts/metals/platinum/tny_pt_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:palladium')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <img src="https://www.kitconet.com/charts/metals/palladium/tny_pd_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </StyledWrapper>
        </>
    )
}