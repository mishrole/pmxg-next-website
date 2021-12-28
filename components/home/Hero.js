import styled, { keyframes } from "styled-components";
import Image from "next/image";

import { Carousel } from "react-bootstrap";
import { ArrowDown } from "react-bootstrap-icons";
import { scroller } from "react-scroll";

import GoldFurnance from "../../public/assets/images/carousel/small_gold_furnance.jpg";
import TestingGold from "../../public/assets/images/carousel/testing_gold-scaled.jpg";
import ChemicalTesting from "../../public/assets/images/carousel/gold-chemical-testing.jpg";
import MeltingPureGold from "../../public/assets/images/carousel/melting-pure-gold.jpg";
import MeltingGold from "../../public/assets/images/carousel/melting_gold-scaled.jpg";

const StyledCarousel = styled(Carousel)`
  max-height: 760px;
  position: relative;
  top: 70px;
`;

const StyledCarouselItem = styled(Carousel.Item)`
  display: block;
  min-height: 760px;
  position: relative;
`;

const StyledArrowDown = styled(ArrowDown)`
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
  margin-top: 30px;
  margin-left: -35px;
  z-index: 100;

  &:hover {
    cursor: pointer;
  }

  &:hover ${StyledArrowDown} {
    transform: translate(0, 5px);
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
  transform: translateZ(0);
  transition: 0.25s;
  width: 70px;
  z-index: 99;
  -ms-transition: 0.25s;
  -moz-transition: 0.25s;
  -o-transition: 0.25s;
  -webkit-transition: 0.25s;
`;

const carouselKeyframes = keyframes`
0% {
  transform: scale(1.02, 1.02);
}
10% {
  transform: scale(1.06, 1.06);
}
20% {
  transform: scale(1.10, 1.10);
}
30% {
  transform: scale(1.14, 1.14);
}
40% {
  transform: scale(1.18, 1.18);
}
50% {
  transform: scale(1.22, 1.22);
}
60% {
  transform: scale(1.18, 1.18);
}
70% {
  transform: scale(1.14, 1.14);
}
80% {
  transform: scale(1.10, 1.10);
}
90% {
  transform: scale(1.06, 1.06);
}
100% {
  transform: scale(1.02, 1.02);
}
`;

const StyledImage = styled(Image)`
  &&& {
    animation: linear ${carouselKeyframes} 20s infinite;
  }
`;

const onClickUp = () => {
  scroller.scrollToTop();
};

const scrollToPMXGBanner = (offset) => {
  scroller.scrollTo("who-we-are", {
    duration: 500,
    delay: 0,
    smooth: true,
    offset: offset,
    spy: true,
  });
};

const heroImages = [
  {
    component: GoldFurnance,
    url: "/assets/images/carousel/small_gold_furnance.jpg",
    alt: "Small Gold Furnance",
  },
  {
    component: TestingGold,
    url: "/assets/images/carousel/testing_gold-scaled.jpg",
    alt: "Testing Gold Scaled",
  },
  {
    component: ChemicalTesting,
    url: "/assets/images/carousel/gold-chemical-testing.jpg",
    alt: "Gold Chemical Testing",
  },
  {
    component: MeltingPureGold,
    url: "/assets/images/carousel/melting-pure-gold.jpg",
    alt: "Melting Pure Gold",
  },
  {
    component: MeltingGold,
    url: "/assets/images/carousel/melting_gold-scaled.jpg",
    alt: "Melting Gold Scaled",
  },
];

const heroCarouselImages = heroImages.map(({ component, url, alt }, index) => {
  return (
    <StyledCarouselItem key={`hero-carousel-item-${index}`}>
      <StyledImage
        src={component}
        alt={alt}
        layout="fill"
        objectFit="cover"
        sizes="70vw"
        loading="eager"
        priority={index === 0 ? true : false}
      ></StyledImage>
    </StyledCarouselItem>
  );
});

export const Hero = (props) => {
  return (
    <>
      <StyledCarousel indicators={false} interval={10000} fade={true}>
        {heroCarouselImages}
      </StyledCarousel>
      <StyledScrollDownWrapper>
        <StyledScrollDown onClick={() => scrollToPMXGBanner(0)}>
          <StyledArrowDown color="white" size={16} />
        </StyledScrollDown>
      </StyledScrollDownWrapper>
    </>
  );
};
