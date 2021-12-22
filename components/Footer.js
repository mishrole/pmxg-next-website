import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image';

const StyledFooter = styled.footer`
    background-color: #1d1d1d;
`;

const StyledImage = styled(Image)`
    padding: 0 !important;
`

const Footer = ({ translate }) => {

    return (

        <>
           <StyledFooter>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Link href="/">
                                <a>
                                    <StyledImage src="/assets/images/pmxg-footer-icon.png" alt="PMXG Logo" layout="responsive" objectFit="scale-down" width={120} height={50}></StyledImage>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                    </Row>
                </Container>     
           </StyledFooter>
        </>
    )
}

export default Footer;