import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

export default function NavMenu({ setIsNavModalClose }) {
    const pages = [
        ["Home", "/"],
        ["Our Work", "/projects"],
        ["Services", "/"],
        ["About Us", "/"],
        ["Contact Us", "/"],
    ]

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
                    {pages.map(([name, route], i) => {
                        return (
                            <li className="nav-item">
                                <Link to={route}>
                                    <Typography
                                        className="nav-link"
                                        style={{
                                            cursor: "pointer",
                                            color: "white",
                                        }}
                                        id={i}
                                        to="home"
                                        onClick={e => {
                                            setIsNavModalClose(true)
                                        }}
                                    >
                                        {name}
                                    </Typography>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
