import { Link } from "react-router-dom"

export default function OurWork() {
    return (
        <div className="our-work">
            <div className="container">
                <p className="fs-1 fw-bold">Our Work</p>
                <div className="row gx-2">
                    <div className="col-12 col-sm-6 mt-2">
                        <div
                            style={{
                                backgroundColor: "#BFCC2B",
                                height: "100%",
                            }}
                            className="p-4"
                        >
                            <img
                                className="img-fluid"
                                src="./OurWork-Mockups/TherapyConnect.svg"
                                alt=""
                            />
                            <p className="fs-3 fw-bold">Therapy Connect</p>
                            <p className="fs-6 fw-light">
                                Web Design project for Australia’s leading
                                online therapy provider.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mt-2">
                        <div
                            style={{
                                backgroundColor: "#00CDAC",
                                height: "100%",
                            }}
                            className="p-4"
                        >
                            <img
                                className="img-fluid"
                                src="./OurWork-Mockups/Vinnies.svg"
                                alt=""
                            />
                            <p className="fs-3 fw-bold">Vinnies</p>
                            <p className="fs-6 fw-light">
                                UX Design for Vinnies website.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row gx-2">
                    <div className="col-12 col-sm-6 mt-2">
                        <div
                            style={{
                                backgroundColor: "#F4E64D",
                                height: "100%",
                            }}
                            className="p-4"
                        >
                            <img
                                className="img-fluid"
                                src="./OurWork-Mockups/KulchaApp.svg"
                                alt=""
                            />
                            <p className="fs-3 fw-bold">Kulcha App</p>
                            <p className="fs-6 fw-light">
                                Mobile App design and build for a social
                                networking site called Kulcha.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mt-2">
                        <div
                            style={{
                                backgroundColor: "#7B61FF",
                                height: "100%",
                            }}
                            className="p-4"
                        >
                            <img
                                className="img-fluid"
                                src="./OurWork-Mockups/TheaOptical.svg"
                                alt=""
                            />
                            <p className="fs-3 fw-bold">Theia Optical</p>
                            <p className="fs-6 fw-light">
                                E-commerce solution for a boutique optometry
                                store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/projects">
                <button className="all-services-btn fw-bold mt-4">
                    See All Projects
                </button>
            </Link>
        </div>
    )
}
