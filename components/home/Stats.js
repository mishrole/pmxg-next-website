import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';

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
        'translation': 'home:gold',
        'url': 'https://www.kitconet.com/charts/metals/gold/tny_au_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    },
    {
        'translation': 'home:silver',
        'url': 'https://www.kitconet.com/charts/metals/silver/tny_ag_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    },
    {
        'translation': 'home:platinum',
        'url': 'https://www.kitconet.com/charts/metals/platinum/tny_pt_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    },
    {
        'translation': 'home:palladium',
        'url': 'https://www.kitconet.com/charts/metals/palladium/tny_pd_en_usoz_2.gif',
        'alt': '[Most Recent Quotes from www.kitco.com]',
        'connecting': 'https://www.kitco.com/connecting.html'
    }
]


export const Stats = ({ translate }) => {

    return (
        <>
                <Container className="py-5 text-center">
                    <Row>
                        {
                            kitcoImages.map(({translation, url, alt, connecting}) => (
                                <Col xs={12} md={6} lg={3} className="p-2 d-block" key={translation}>
                                    <h3>{translate(translation)}</h3>
                                    <StyledAnchor href={connecting}>
                                        <StyledImage alt={alt} src={url} layout="responsive" objectFit="scale-down" width={50} height={50} />
                                    </StyledAnchor>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
        </>
    )
}