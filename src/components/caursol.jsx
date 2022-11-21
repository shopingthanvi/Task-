import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src="/backword.png" className={className}
            style={{ ...style, display: "block",height:"35px" }}
            onClick={onClick}
        />

    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src="/forword.png" className={className}
            style={{ ...style, display: "block",height:"35px" }}
            onClick={onClick}
        />
    );
}

const Carousel = (props) => {
    const { text, subheading, slidesToShow, textShowCenter } = props
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="carusal-wrapper">
            <p className={`carusal-wrapper__title ${textShowCenter ? "text-center" : ""}`}>{text}</p>
            <h1 className={`carusal-wrapper__sub-title mb-5 ${textShowCenter ? "text-center" : ""}`}>{subheading}</h1>
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div >
    )
}
export default Carousel