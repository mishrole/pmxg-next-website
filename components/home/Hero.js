import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { ArrowDown } from 'react-bootstrap-icons';
import { Link, animateScroll, scroller } from 'react-scroll';
import Image from 'next/image';

const StyledCarousel = styled(Carousel)`
    max-height: 760px;
    position: relative;
    top: 70px;
`;

const StyledCarouselItem = styled(Carousel.Item)`
    // max-height: 760px;
    display: block;
    min-height: 760px;
    position: relative;
`;

const StyledArrowDown = styled(ArrowDown)`
    color: var(--bs-light);
    transition: 0.25s;
    -ms-transition: 0.25s;
    -moz-transition: 0.25s;
    -o-transition: 0.25s;
    -webkit-transition: 0.25s;
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

const StyledScrollDown = styled.span`
    align-items: center;
    background-color: var(--bs-primary-dark);
    border: 1px solid var(--bs-light);
    border-radius: 90px;
    color: transparent;
    display: flex;
    height: 70px;
    justify-content: center;
    line-height: 0;
    transition: 0.25s;
    width: 70px;
    z-index: 99;
    -ms-transition: 0.25s;
    -moz-transition: 0.25s;
    -o-transition: 0.25s;
    -webkit-transition: 0.25s;
`;

const onClickUp = () => {
    scroller.scrollToTop();
}

const scrollToPMXGBanner = (offset) => {
    scroller.scrollTo("who-we-are", {
      duration: 500,
      delay: 0,
      smooth: 'easeOutElastic',
      offset: offset,
      spy: true
    });
}

const heroImages = [
    {
        'url': '/assets/images/carousel/small_gold_furnance.jpg',
        'alt': 'Small Gold Furnance'
    },
    {
        'url': '/assets/images/carousel/testing_gold-scaled.jpg',
        'alt': 'Testing Gold Scaled'
    },
    {
        'url': '/assets/images/carousel/gold-chemical-testing.jpg',
        'alt': 'Gold Chemical Testing'
    },
    {
        'url': '/assets/images/carousel/melting-pure-gold.jpg',
        'alt': 'Melting Pure Gold'
    },
    {
        'url': '/assets/images/carousel/melting_gold-scaled.jpg',
        'alt': 'Melting Gold Scaled'
    }
]

export const Hero = (props) => {
    return (
        <>
            <StyledCarousel indicators={false} interval={10000} fade={true}>
                {
                    heroImages.map(({url, alt}, index) => (
                        <StyledCarouselItem key={`hero-carousel-item-${index}`}>
                            <Image src={url} alt={alt} priority={index === 0 && true} layout="fill" objectFit="cover"></Image>
                        </StyledCarouselItem>
                    ))
                }
            </StyledCarousel>
            <StyledScrollDownWrapper>
                <StyledScrollDown onClick={() => scrollToPMXGBanner(0)}>
                    <StyledArrowDown color="white" size={16} />
                </StyledScrollDown>
            </StyledScrollDownWrapper>
        </>
    )
}