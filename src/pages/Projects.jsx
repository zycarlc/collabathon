import Isotope from "isotope-layout"
import { useEffect, useRef, useState } from "react"
import Contact from "../components/Contact"
import { Link as Scroll } from "react-scroll"

export default function Projects() {
    const filters = {
        UXDESIGN: "UX/UI Design",
        WEBDESIGN: "Website Design",
        APPDESIGN: "App Design",
        GRAPHICDESIGN: "Graphic Design",
        REBRANDING: "Rebranding",
        DEVELOPMENT: "Development",
    }
    const isotope = useRef()

    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState("*")
    const [imagesLoaded, setimagesLoaded] = useState(0)

    const handleFilterKeyChange = key => () => setFilterKey(key)

    const projectsData = [
        {
            title: "Kulcha App",
            bgc: "yellow",
            document: {
                projectInfo:
                    "Mobile App design and build for a social networking site called Kulcha.",
                client: "Ruby Clinton",
                technologies: "iOS, HTML5, CSS3, PHP, Java",
                industry: "Art & Design",
                date: "July 16, 2019",
                url: {
                    name: "www.example.com",
                    link: "https://www.example.com",
                },

                sliderImages: [
                    "images/projects/project-2.jpg",
                    "images/projects/project-5.jpg",
                ],
            },

            thumbImage: "./OurWork-Mockups/KulchaApp.svg",

            categories: [filters.UXDESIGN],
        },
        {
            title: "Theia Optical",
            bgc: "violet",
            document: {
                projectInfo:
                    "Web Design project for Australia’s leading online therapy provider.",
            },
            thumbImage: "./OurWork-Mockups/TheaOptical.svg",
            categories: [filters.GRAPHICDESIGN],
        },
        {
            title: "Therapy Connect",
            bgc: "mint",
            document: {
                projectInfo:
                    "Web Design project for Australia’s leading online therapy provider.",
            },

            video: {
                vimeo: false,
                id: "PMNnEEEacCg",
            },
            thumbImage: "./OurWork-Mockups/TherapyConnect.svg",

            categories: [filters.WEBDESIGN],
        },
        {
            title: "Vinnes",
            bgc: "mint",
            video: {
                vimeo: true,
                id: "259411563",
            },
            document: {
                projectInfo: "UX Design for Vinnies website.",
            },
            thumbImage: "./OurWork-Mockups/Vinnies.svg",
            categories: [filters.REBRANDING],
        },
        {
            title: "Kulcha App",
            bgc: "yellow",
            document: {
                projectInfo:
                    "Mobile App design and build for a social networking site called Kulcha.",
                client: "Ruby Clinton",
                technologies: "iOS, HTML5, CSS3, PHP, Java",
                industry: "Art & Design",
                date: "July 16, 2019",
                url: {
                    name: "www.example.com",
                    link: "https://www.example.com",
                },
                sliderImages: [
                    "images/projects/project-1.jpg",
                    "images/projects/project-2.jpg",
                ],
            },
            thumbImage: "./OurWork-Mockups/KulchaApp.svg",
            categories: [filters.DEVELOPMENT],
        },
        {
            title: "Thea Optical",
            bgc: "violet",
            document: {
                projectInfo:
                    "Web Design project for Australia’s leading online therapy provider.",
            },
            thumbImage: "./OurWork-Mockups/TheaOptical.svg",

            categories: [filters.APPDESIGN],
        },
    ]
    const getKeyByValue = value => {
        return Object.keys(filters).find(key => filters[key] === value)
    }

    const getFilterClasses = categories => {
        if (categories.length > 0) {
            let tempArray = []
            categories.forEach((category, index) => {
                tempArray.push(getKeyByValue(category))
            })
            return tempArray.join(" ")
        }
    }
    useEffect(() => {
        isotope.current = new Isotope(".portfolio-filter", {
            itemSelector: ".filter-item",
            layoutMode: "fitRows",
        })

        // cleanup
        return () => {
            isotope.current.destroy()
        }
    }, [])

    // handling filter key change
    useEffect(() => {
        if (imagesLoaded) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey, imagesLoaded])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="landing-page">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-md-6 text-md-start">
                            <h1>Our Work</h1>
                            <p style={{ marginTop: "16px" }}>
                                We've collaborated with amazing clients across
                                different industries. Explore our hive of
                                transformative branding, product development,
                                and design solutions. Get in touch and let’s
                                create something extraordinary together.
                            </p>
                            <Scroll to="contactus" offset={-50}>
                                <button className="project-contact fw-bold mx-auto mx-sm-0">
                                    Contact Us
                                </button>
                            </Scroll>
                        </div>
                    </div>
                    <div className="logo-bg">
                        <img className="logo-img" src="./logoicon.svg" alt="" />
                    </div>
                </div>
            </div>
            {/* Filter Menu */}
            <ul
                className={
                    "nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 m-5 text-nowrap"
                }
            >
                <li className="nav-item">
                    <div className="filter-wrapper p-2">
                        <button
                            className={
                                "nav-filter " +
                                (filterKey === "*" ? "active" : "")
                            }
                            onClick={handleFilterKeyChange("*")}
                        >
                            View All
                        </button>
                    </div>
                </li>
                {Object.keys(filters).map((oneKey, i) => (
                    <li className="nav-item" key={i}>
                        <div className="filter-wrapper p-2">
                            <button
                                className={
                                    "nav-filter " +
                                    (filterKey === oneKey ? "active" : "")
                                }
                                onClick={handleFilterKeyChange(oneKey)}
                            >
                                {filters[oneKey]}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {/* Filter Menu end */}
            <div className="container project-page">
                <div className="row portfolio-filter filter-container g-4">
                    {projectsData.length > 0 &&
                        projectsData.map((project, index) => (
                            <div
                                className={
                                    "col-sm-6 col-lg-4 filter-item " +
                                    getFilterClasses(project.categories)
                                }
                                key={index}
                            >
                                <div className="portfolio-box">
                                    <div className={"p-5 " + project.bgc}>
                                        <img
                                            className="img-fluid d-block portfolio-image"
                                            src={project.thumbImage}
                                            alt=""
                                            onLoad={() => {
                                                setimagesLoaded(
                                                    imagesLoaded + 1
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="portfolio-overlay">
                                        <button className="popup-ajax stretched-link border-0 p-0 ">
                                            {" "}
                                        </button>
                                        <div>
                                            <h5 className="text-5">
                                                {project.title}
                                            </h5>
                                            <span className="fs-6">
                                                {project.document?.projectInfo
                                                    ? project.document
                                                          .projectInfo
                                                    : ""}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="mt-5">
                <Contact></Contact>
            </div>
        </div>
    )
}
