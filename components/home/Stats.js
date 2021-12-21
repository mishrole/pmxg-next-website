import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const StyledWrapper = styled.div`
    padding: 150px 0 0;
    position: relative;
`;

const StyledContainer = styled(Container)`
    background-color: #273e74;
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
`

const kitcoImages = [
    {
        'translation': 'translation:gold',
        'url': 'https://www.kitconet.com/charts/metals/gold/tny_au_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    },
    {
        'translation': 'translation:silver',
        'url': 'https://www.kitconet.com/charts/metals/silver/tny_ag_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    },
    {
        'translation': 'translation:platinum',
        'url': 'https://www.kitconet.com/charts/metals/platinum/tny_pt_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    },
    {
        'translation': 'translation:palladium',
        'url': 'https://www.kitconet.com/charts/metals/palladium/tny_pd_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    }
]


export const Stats = (props) => {
    
    const { t } = useTranslation();

    return (
        <>
            <StyledWrapper name="who-we-are">
                <StyledContainer fluid>
                    <h2>{t('translation:who-we-are')}</h2>
                    <p>{t('translation:who-we-are_message')}</p>
                </StyledContainer>
                <Container className="py-5 text-center">
                    <Row>
                        {
                            kitcoImages.map(({translation, url, alt, connecting}) => (
                                <Col xs={12} md={6} lg={3} className="p-2 d-block" key={translation}>
                                    <h3>{t(translation)}</h3>
                                    <StyledAnchor href={connecting}>
                                        {/* <Image src={url} alt={alt} layout="intrinsic" width={100} height={100} sizes='1vw'/> */}
                                        {/* <Image src={url} alt={alt} layout="responsive" sizes="30vw"/> */}
                                        {/* <Image src={url} layout="fill" className={'image'} /> */}
                                        <StyledImage alt={alt} src={url} layout="responsive" objectFit="scale-down" width={50} height={50} />
                                    </StyledAnchor>
                                </Col>
                            ))
                        }
                        {/* <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:gold')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <Image src="https://www.kitconet.com/charts/metals/gold/tny_au_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:silver')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <Image src="https://www.kitconet.com/charts/metals/silver/tny_ag_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:platinum')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <Image src="https://www.kitconet.com/charts/metals/platinum/tny_pt_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="p-2">
                            <h2>{t('translation:palladium')}</h2>
                            <a href="https://www.kitco.com/connecting.html">
                                <Image src="https://www.kitconet.com/charts/metals/palladium/tny_pd_en_usoz_2.gif" alt="[Most Recent Quotes from www.kitco.com]" border="0" />
                            </a>
                        </Col> */}
                    </Row>
                </Container>
            </StyledWrapper>
        </>
    )
}