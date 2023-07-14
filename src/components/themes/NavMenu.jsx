import { Link, useLocation } from "react-router-dom"
import { Link as Scroll } from "react-scroll"

export default function NavMenu({ setIsNavModalClose }) {
    const pages = [
        ["Home", "/"],
        ["Our Work", "/projects"],
        ["About Us", "/aboutus"],
        ["Contact Us", "/"],
    ]

    let location = useLocation()

    return (
        <div
            style={{
                backgroundColor: "white",
                color: "black",
                height: "70vh",
                minHeight: "400px",
            }}
        >
            <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                <ul
                    className="navbar-nav"
                    style={{
                        marginTop: "0",
                        listStyle: "none",
                        textAlign: "center",
                        padding: "0",
                    }}
                >
                    {pages.map(([name, route], i) => {
                        return (
                            <li key={i}>
                                {name === "Services" ? (
                                    <div
                                        className="fs-1 fw-bold my-2"
                                        style={{
                                            cursor: "not-allowed",
                                            color: "grey",
                                        }}
                                    >
                                        {name}
                                    </div>
                                ) : name === "Contact Us" ? (
                                    <Scroll to="contactus" offset={-50}>
                                        <div
                                            className="fs-1 fw-bold my-2"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                            onClick={e => {
                                                setIsNavModalClose(true)
                                            }}
                                        >
                                            {name}
                                        </div>
                                    </Scroll>
                                ) : (
                                    <Link to={route}>
                                        <div
                                            className="fs-1 fw-bold my-2"
                                            style={{
                                                cursor: "pointer",
                                                color:
                                                    location.pathname === route
                                                        ? "#7B61FF"
                                                        : "black",
                                            }}
                                            onClick={e => {
                                                setIsNavModalClose(true)
                                            }}
                                        >
                                            {name}
                                        </div>
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                    <li>
                        <button
                            className="workwithus-bar fw-bold my-2"
                            disabled
                        >
                            Work With Us
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
