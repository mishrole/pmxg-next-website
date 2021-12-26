import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const StyledAnchorLarge = styled.a`
    position: relative;
    display: block;

    > span > span {
        padding: 5em !important;
    }
`;

const StyledAnchorSmall = styled.a`
    position: relative;
    display: block;

    > span {
        min-height: 300px;
    }

    > span > span {
        padding: 10% !important;
    }
`;

const StyledImage = styled(Image)`
    padding: 0 !important;
`

// const kitcoPrices = [
//     {
//         'url' : 'https://www.kitconet.com/images/quotes_7a.gif',
//         'alt' : '[Most Recent Quotes from www.kitco.com]',
//         'connecting': 'https://www.kitco.com/connecting.html'
//     },
//     {
//         'url' : 'https://www.kitconet.com/images/lf_en_7.gif',
//         'alt' : '[Most Recent Quotes from www.kitco.com]',
//         'connecting': 'https://www.kitco.com/connecting.html'
//     },
//     {
//         'url' : 'https://www.kitconet.com/images/live/s_gold.gif',
//         'alt' : '[Most Recent Quotes from www.kitco.com]',
//         'connecting': 'https://www.kitco.com/connecting.html'
//     }
// ]

export const KitcoPrices = (props) => {
    return (
        <>
            <Container className="py-5">
                <Row className="text-center p-2 align-items-center">
                    <Col xs={12} md={8}>
                        <StyledAnchorLarge href="https://www.kitco.com/connecting.html">
                            <StyledImage layout="responsive" objectFit="scale-down" width={100} height={100} src="https://www.kitconet.com/images/quotes_7a.gif" alt="[Most Recent Quotes from www.kitco.com]"></StyledImage>
                        </StyledAnchorLarge>
                        <StyledAnchorLarge href="https://www.kitco.com/connecting.html">
                            <StyledImage layout="responsive" objectFit="scale-down" width={100} height={100} src="https://www.kitconet.com/images/lf_en_7.gif" alt="[Most Recent Quotes from www.kitco.com]"></StyledImage>
                        </StyledAnchorLarge>
                    </Col>
                    <Col xs={12} md={4}>
                        <StyledAnchorSmall href="https://www.kitco.com/connecting.html">
                            <StyledImage layout="responsive" objectFit="scale-down" width={100} height={100} src="https://www.kitconet.com/images/live/s_gold.gif" alt="[Most Recent Quotes from www.kitco.com]"></StyledImage>
                        </StyledAnchorSmall>
                    </Col> 
                </Row>
            </Container>
        </>
    )
}