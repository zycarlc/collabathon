import Typography from "@mui/material/Typography"

export default function NavMenu({ setIsNavModalClose }) {
    return (
        <div
            id="header-nav"
            className={"collapse navbar-collapse"}
            style={{
                backgroundColor: "black",
                color: "white",
                height: "70vh",
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
                        paddingTop: "30px",
                    }}
                >
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="home"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            Home
                        </Typography>
                    </li>
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="about"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            About Me
                        </Typography>
                    </li>
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="services"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            What I Do
                        </Typography>
                    </li>
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="resume"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            Resume
                        </Typography>
                    </li>
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="portfolio"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            Portfolio
                        </Typography>
                    </li>
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="faq"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            FAQ
                        </Typography>
                    </li>
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="testimonial"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            Client Speak
                        </Typography>
                    </li>
                    <li className="nav-item">
                        <Typography
                            className="nav-link"
                            style={{ cursor: "pointer" }}
                            activeClass="active"
                            spy
                            to="contact"
                            onClick={e => {
                                e.preventDefault()
                                setIsNavModalClose(true)
                            }}
                        >
                            Contact Me
                        </Typography>
                    </li>
                </ul>
            </div>
        </div>
    )
}
