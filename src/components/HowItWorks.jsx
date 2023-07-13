import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"

import Slider from "react-slick"

export default function HowItWorks() {
    // set width

    const [slidesToShow, setSlidesToShow] = useState(1.5)

    function handleWindowSizeChange() {
        if (window.innerWidth < 390) {
            setSlidesToShow(1.5)
        } else if (window.innerWidth < 1000) {
            let slides = (window.innerWidth - 390) / 244
            setSlidesToShow(1.5 + slides)
        } else {
            setSlidesToShow(4)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange)
        handleWindowSizeChange()
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange)
        }
    }, [])

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
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4500,
        variableWidth: false,
    }

    return (
        <section className="section how-it-works">
            <Box
                sx={{
                    display: { xs: "block", md: "block" },
                    minHeight: "650px",
                }}
            >
                <h2 className="text-10 fw-600 text-white mb-5 pt-5 px-5">
                    How it works
                </h2>
                {/* Heading end*/}

                <div className="p-4">
                    <div className="mx-auto">
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
                                                    backgroundColor: review.bgc,
                                                    borderRadius: "30px",
                                                    height: "200px",
                                                    width: "200px",
                                                }}
                                                className="p-4 text-center mb-5"
                                            >
                                                <img
                                                    className="d-inline-block img-fluid"
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
                {/* Heading */}
            </Box>
        </section>
    )
}
