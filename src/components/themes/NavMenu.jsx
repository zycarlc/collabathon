import Typography from "@mui/material/Typography"

export default function NavMenu({ setIsNavModalClose }) {
    const pages = ["Home", "Our Work", "Services", "About Us", "Contact Us"]

    return (
        <div
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
                    {pages.map((page, i) => {
                        return (
                            <li className="nav-item">
                                <Typography
                                    className="nav-link"
                                    style={{ cursor: "pointer" }}
                                    id={i}
                                    to="home"
                                    onClick={e => {
                                        e.preventDefault()
                                        setIsNavModalClose(true)
                                    }}
                                >
                                    {page}
                                </Typography>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
