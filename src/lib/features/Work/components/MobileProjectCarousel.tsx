import { MouseEventHandler, useState } from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { WorkStackImageProps } from "@datautils/work_stack";
import "src/lib/features/Work/components/style.css";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import iconChevronRight from "@assets/icon_chevron_right.svg";
import iconChevronLeft from "@assets/icon_chevron_left.svg";

interface Props {
  images: WorkStackImageProps[];
}

interface _ImageProps {
  src: string;
  alt: string;
  index: number;
  current: boolean;
}

interface _IconProps {
  onClick: () => void;
}

const _IconRight = (props: _IconProps) => {
  return (
    <Image
      onClick={() => {
        props.onClick();
      }}
      top="50%"
      left="103%"
      pos="absolute"
      zIndex={10}
      cursor="pointer"
      src={iconChevronRight}
      alt="Icon Chevron Right"
    />
  );
};

const _IconLeft = (props: _IconProps) => {
  return (
    <Image
      onClick={() => {
        props.onClick();
      }}
      top="50%"
      right="103%"
      pos="absolute"
      zIndex={10}
      cursor="pointer"
      src={iconChevronLeft}
      alt="Icon Chevron Left"
    />
  );
};

const _Image = (props: _ImageProps) => {
  const border = useBreakpointValue({
    base: "5px solid black",
    sm: "6px solid black",
    md: "7px solid black",
  });

  const borderRadius = useBreakpointValue({
    base: "15px",
    sm: "25px",
    md: "35px",
  });

  return (
    <div
      style={{
        backgroundColor: "",
        paddingBottom: "30px",
        marginTop: "50px",
      }}
    >
      <img
        style={{
          transform: props.current ? "scale(1.0)" : "scale(0.7)",
          transition: props.current ? "transform 300ms" : "transform 300ms",
          boxShadow: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          borderRadius: borderRadius,
          border: border,
          backgroundColor: "",

          // paddingLeft: "10px",
          // paddingRight: "10px",
        }}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
};

const MobileProjectCarousel = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const settings = {
    beforeChange: (_, next) => setCurrentPage(next),
    infinite: true,
    speed: 300,
    centerPadding: "22%",
    centerMode: true,
    arrows: true,
    slidesToShow: 1,
    useTransform: true,
    focusOnSelect: true,
    lazyLoad: "anticipated",
    nextArrow: <_IconRight onClick={() => {}} />,
    prevArrow: <_IconLeft onClick={() => {}} />,
    // nextArrow: (
    //   <Image cursor="pointer" src={iconChevronRight} alt="Icon Chevron Right" />
    // ),
    // prevArrow: (
    //   <Image cursor="pointer" src={iconChevronLeft} alt="Icon Chevron Left" />
    // ),
  } as Settings;

  return (
    <Slider className="custom-slider" {...settings}>
      {props.images.map((val, index) => {
        return (
          <_Image
            key={index}
            src={val.src}
            alt={val.alt}
            index={index}
            current={index === currentPage}
          />
        );
      })}
    </Slider>
  );
};

export default MobileProjectCarousel;
