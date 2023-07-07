import { Box } from "@mui/material"
import React from "react"

import Slider from "react-slick"

export default function HowItWorks() {
    const reviews = [
        {
            name: "1. Onboarding",
            bgc: "#C9F227",
            src: "./HowItWorks/1.png",
            desc: "Our experienced designers will have a consultation to get to know you and your business",
        },
        {
            name: "2. Design",
            bgc: "#00CDAC",
            src: "./HowItWorks/2.png",
            desc: "Our skilled team will design your product based on your needs and tailor a marketing strategy",
        },
        {
            name: "3. Test",
            bgc: "#7B61FF",
            src: "./HowItWorks/3.png",
            desc: "We will conduct comprehensive user testing to validate the design to ensure its effectiveness",
        },
        {
            name: "4. Build",
            bgc: "#F4E64D",
            src: "./HowItWorks/4.png",
            desc: "Next, our software developers will get to work to build your fully functioning product",
        },
    ]

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <i className="fa fa-chevron-left"></i>
        </button>
    )
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <i className="fa fa-chevron-right"></i>
        </button>
    )

    var settings = {
        dots: true,
        arrows: false,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        infinite: false,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4500,
        variableWidth: false,
    }

    return (
        <section className="section how-it-works">
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    minHeight: "650px",
                }}
            >
                <div className="container">
                    {/* Heading */}
                    <h2 className="text-10 fw-600 text-white mb-5 pt-5">
                        How it works
                    </h2>
                    {/* Heading end*/}
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <Slider {...settings}>
                                {reviews.length > 0 &&
                                    reviews.map((review, index) => (
                                        <div
                                            className="col-3 mx-auto mb-5"
                                            key={index}
                                        >
                                            <div className="item px-2">
                                                <div
                                                    style={{
                                                        backgroundColor:
                                                            review.bgc,
                                                        borderRadius: "30px",
                                                        height: "200px",
                                                        width: "200px",
                                                    }}
                                                    className="p-4 text-center mb-5"
                                                >
                                                    <img
                                                        className="d-inline-block"
                                                        src={review.src}
                                                        alt={review.name}
                                                    />
                                                </div>

                                                <strong className="d-block text-3 fw-600 text-white mb-3">
                                                    {review.name}
                                                </strong>
                                                <p className="text-5 text-white fw-light">
                                                    {review.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </Box>
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                }}
            >
                <div className="container">
                    {/* Heading */}
                    <h2 className="text-10 fw-600 text-white mb-5 pt-5">
                        How it works
                    </h2>
                    {/* Heading end*/}
                    <div className="row">
                        {reviews.length > 0 &&
                            reviews.map((review, index) => (
                                <div className="col-3 mx-auto mb-5" key={index}>
                                    <div className="item px-2">
                                        <div
                                            style={{
                                                backgroundColor: review.bgc,
                                                borderRadius: "30px",
                                                height: "200px",
                                                width: "200px",
                                            }}
                                            className="p-4 text-center mb-5"
                                        >
                                            <img
                                                className="d-inline-block"
                                                src={review.src}
                                                alt={review.name}
                                            />
                                        </div>

                                        <strong className="d-block text-3 fw-600 text-white mb-3">
                                            {review.name}
                                        </strong>
                                        <p className="text-5 text-white fw-light">
                                            {review.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </Box>
        </section>
    )
}
