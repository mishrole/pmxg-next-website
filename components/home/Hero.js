import styled from 'styled-components';
import { Carousel } from "react-bootstrap";
import { ArrowDown } from "react-bootstrap-icons";
import { Link } from 'react-scroll';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['translation']))
        }
    }
}

const StyledCarousel = styled(Carousel)`
    position: relative;
    top: 70px;
    max-height: 760px;
`;

const StyledCarouselItem = styled(Carousel.Item)`
    max-height: 760px;
    position: relative;
`;

const StyledArrowDown = styled(ArrowDown)`
    color: #FFFFFF;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    -ms-transition: 0.25s;
    -o-transition: 0.25s;
    transition: 0.25s;
`;

const StyledScrollDownWrapper = styled.div`
    width: 70px;
    height: 70px;
    position: absolute;
    left: 50%;
    // margin-top: -35px;
    margin-top: 30px;
    margin-left: -35px;
    z-index: 100;

    &:hover {
        cursor: pointer;
    }

    &:hover ${StyledArrowDown} {
        margin-top: 10px;
    }
`;

const StyledScrollDown = styled(Link)`
    background-color: #002764;
    line-height: 0;
    color: transparent;
    font-size: 0;
    width: 70px;
    height: 70px;
    border: 1px solid white;
    display: block;
    z-index: 99;
    border-radius: 90px;
    -webkit-transition: 0.25s;
    -moz-transition: 0.25s;
    -ms-transition: 0.25s;
    -o-transition: 0.25s;
    transition: 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hero = (props) => {
    return (
        <>
            <StyledCarousel indicators={false} interval={10000} fade={true}>
                <StyledCarouselItem>
                    <img className="d-block w-100" src="/assets/images/carousel/small_gold_furnance.jpg" alt="Small Gold Furnance"/>
                </StyledCarouselItem>
                <StyledCarouselItem>
                    <img className="d-block w-100" src="/assets/images/carousel/testing_gold-scaled.jpg" alt="Testing Gold Scaled"/>
                </StyledCarouselItem>
                <StyledCarouselItem>
                    <img className="d-block w-100" src="/assets/images/carousel/gold-chemical-testing.jpg" alt="Gold Chemical Testing"/>
                </StyledCarouselItem>
                <StyledCarouselItem>
                    <img className="d-block w-100" src="/assets/images/carousel/melting-pure-gold.jpg" alt="Melting Pure Gold"/>
                </StyledCarouselItem>
                <StyledCarouselItem>
                    <img className="d-block w-100" src="/assets/images/carousel/melting_gold-scaled.jpg" alt="Melting Gold Scaled"/>
                </StyledCarouselItem>
            </StyledCarousel>
            <StyledScrollDownWrapper>
                <StyledScrollDown to="who-we-are" smooth={true} duration={1200}>
                    <StyledArrowDown color="white" size={16} />
                </StyledScrollDown>
            </StyledScrollDownWrapper>
        </>
    )
}