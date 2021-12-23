import { Container, Row, Col } from 'react-bootstrap';
import { device } from '../util/mediaQueries';
import Link from 'next/link'
import styled from 'styled-components';
import Image from 'next/image';
import FooterIcon from '../public/assets/images/pmxg-footer-icon.png';

const StyledFooter = styled.footer`
    background-color: #1d1d1d;
    padding: 1em 0 2em;
`;

const StyledImage = styled(Image)`
    padding: 0 !important;

    @media ${device.mobileS} { 
        left: 11% !important;
    }

    @media ${device.tablet} { 
        left: 0 !important;
    }
`

const StyledAnchor = styled.a`
    &&& {
        position: relative;
        display: block;
        max-width: 150px;
        padding-left: 1em;
        padding-bottom: 1em;
    }

    @media ${device.mobileS} { 
        padding-left: 0;
        margin: 0 auto;
    }

    @media ${device.tablet} { 
        padding-left: 1em;
        margin: 0;
    }
`;

const StyledWrapper = styled.div`
    &&& {
        color: var(--bs-gray-light);
    }

    > * {
        margin: 0;
        padding: 0;
    }

    > a, a:hover {
        color: var(--bs-light);
    }
`;

const StyledGrid = styled.div`
    &&& {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        // grid-column-gap: 10px;
        // grid-row-gap: 10px;
    }
`;

    const StyledTitle = styled.p`
        &&& {
            color: var(--bs-light);
            letter-spacing: 0.5px;
            margin: 0 0.5em;
            padding: 0.5rem 1rem;
        }
    `;

    const StyledSubtitle = styled.p`
        &&& {
            color: var(--bs-gray-light);
            letter-spacing: 0.5px;
            margin: 0 .5em;
            padding: .5rem 1rem;
        }
    `;

    const StyledAnchorSmall = styled.a`
        &&& {
            color: var(--bs-gray-light);
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0.5px;
            margin: 0 .5em;
            text-transform: uppercase;
        }

        &&&:hover, &&&:active {
            color: var(--bs-light);
        }
    `;

    const StyledAnchorCta = styled.a`
        &&& {
            color: var(--bs-light);
            cursor: pointer;
            font-size: 14px;
            letter-spacing: 0.5px;
            margin: 0 .5em;
            padding: 0.5rem 1rem;
        }

        &&&:hover, &&&:active {
            color: var(--bs-light);
        }
    `;

const Footer = ({ translate }) => {

    const home = translate('common:home');
    const about = translate('common:about-us');
    const products = translate('common:products');
    const services = translate('common:services');
    const contact = translate('common:contact');
    const login = translate('common:login');

    const aboutUsTitle = translate('common:footer.who-we-are');
    const aboutUsMessage = translate('common:footer.who-we-are_message');

    return (

        <>
           <StyledFooter>
                <Container className="py-4">
                    <Row className="py-4 text-center text-md-start">
                        <Col xs={12} md={3}>
                            <Col xs={12}>
                                <Link href="/">
                                    <StyledAnchor>
                                        <StyledImage src={FooterIcon} alt="PMXG Logo" layout="responsive" objectFit="scale-down" width={120} height={50}></StyledImage>
                                    </StyledAnchor>
                                </Link>
                            </Col>
                            <Col xs={12}>
                                <StyledWrapper>
                                    <StyledSubtitle className="pt-0">{translate('common:footer.address')}</StyledSubtitle>
                                    <StyledSubtitle className="pt-0">{translate('common:footer.address_info')}</StyledSubtitle>
                                    <StyledAnchorCta className='pt-0 nav-link' href="https://app.pmxg.com/contact">{translate('common:footer.contact-us-here')}</StyledAnchorCta>
                                    <StyledSubtitle className="pt-0">{translate('common:footer.phone')}</StyledSubtitle>
                                </StyledWrapper>
                            </Col>
                        </Col>
                        
                        <Col xs={12} md={4}>
                            <StyledTitle className="text-uppercase fw-bold">Menu</StyledTitle>
                            <StyledGrid>
                                <div>
                                    <Link href="/">
                                        <StyledAnchorSmall className='nav-link'>{home}</StyledAnchorSmall>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/about-us">
                                        <StyledAnchorSmall className='nav-link'>{about}</StyledAnchorSmall>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/products">
                                        <StyledAnchorSmall className='nav-link'>{products}</StyledAnchorSmall>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <StyledAnchorSmall className='nav-link'>{services}</StyledAnchorSmall>
                                    </Link>
                                </div>
                                <div>
                                    <StyledAnchorSmall className="nav-link" href="https://app.pmxg.com/contact">{contact}</StyledAnchorSmall>
                                </div>
                                <div>
                                    <StyledAnchorSmall className="nav-link" href="https://app.pmxg.com/auth">{login}</StyledAnchorSmall>
                                </div>
                            </StyledGrid>
                        </Col>
                        <Col xs={12} md={5}>
                            <StyledTitle className="text-uppercase fw-bold">{aboutUsTitle}</StyledTitle>
                            <StyledSubtitle>{aboutUsMessage}</StyledSubtitle>
                        </Col>
                    </Row>
                </Container>     
           </StyledFooter>
        </>
    )
}

export default Footer;