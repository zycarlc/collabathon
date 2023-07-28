import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import NavMenu from "./NavMenu"
import { Link, useLocation } from "react-router-dom"
import { Link as Scroll } from "react-scroll"

function ResponsiveAppBar() {
    const pages = [
        ["about Us", "/aboutus"],
        ["our projects", "/projects"],
        ["contact us", "contactus"],
    ]

    let location = useLocation()

    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleClick = event => {
        setAnchorElNav(!anchorElNav)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(false)
    }

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: anchorElNav ? "white" : "black",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                        <svg
                            width="40"
                            height="38"
                            viewBox="0 0 208 194"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M46.3329 38.5923C46.3329 36.5453 47.1966 34.582 48.734 33.1345C50.2713 31.687 52.3564 30.8738 54.5306 30.8738H71.4095C72.8485 30.8739 74.2621 31.2305 75.5083 31.908C76.7544 32.5854 77.7892 33.5598 78.5087 34.7331L86.9441 48.4874C88.0312 50.2612 88.3253 52.3689 87.7619 54.3469C87.1985 56.3249 85.8236 58.0111 83.9397 59.0347C82.0558 60.0582 79.8172 60.3352 77.7164 59.8047C75.6156 59.2742 73.8246 57.9796 72.7376 56.2058L66.6795 46.3108H54.5306C52.3564 46.3108 50.2713 45.4976 48.734 44.0501C47.1966 42.6026 46.3329 40.6394 46.3329 38.5923ZM206.04 100.842L178.668 145.478C177.948 146.651 176.913 147.625 175.667 148.303C174.421 148.98 173.007 149.337 171.568 149.337H122.424L97.4207 190.106C96.7012 191.279 95.6664 192.253 94.4202 192.931C93.1741 193.608 91.7605 193.965 90.3215 193.965H35.6022C34.1632 193.965 32.7497 193.608 31.5035 192.931C30.2573 192.253 29.2225 191.279 28.503 190.106L1.09828 145.478C0.378783 144.304 0 142.973 0 141.618C0 140.263 0.378783 138.932 1.09828 137.759L26.1339 96.9825L1.09828 56.2058C0.378783 55.0325 0 53.7015 0 52.3466C0 50.9917 0.378783 49.6607 1.09828 48.4874L28.503 3.85923C29.2225 2.68591 30.2573 1.71156 31.5035 1.03413C32.7497 0.356692 34.1632 3.44183e-05 35.6022 0H90.3379C91.7769 3.44183e-05 93.1905 0.356692 94.4366 1.03413C95.6828 1.71156 96.7176 2.68591 97.4371 3.85923L122.424 44.6282H171.519C172.958 44.6282 174.372 44.9848 175.618 45.6623C176.864 46.3397 177.899 47.3141 178.618 48.4874L206.04 93.1233C206.759 94.2966 207.138 95.6276 207.138 96.9825C207.138 98.3374 206.759 99.6684 206.04 100.842ZM17.6985 52.3466L40.3322 89.264H84.7143L107.807 51.6134L85.6079 15.4369H40.3322L17.6985 52.3466ZM107.791 142.352L84.7143 104.701H40.3322L17.6985 141.618L40.3322 178.528H85.6079L107.791 142.352ZM189.439 96.9825L166.806 60.0651H122.424L99.3471 97.7543L121.53 133.931H166.806L189.439 96.9825Z"
                                fill="#DCEB2E"
                            />
                        </svg>
                    </Box>
                    <Box
                        variant="h6"
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        {anchorElNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="108"
                                height="14"
                                viewBox="0 0 108 14"
                                fill="none"
                            >
                                <path
                                    d="M4.62483 13.8071H0V0.186223H4.66305C5.97533 0.186223 7.10499 0.458908 8.05204 1.00428C8.99909 1.54521 9.72743 2.32336 10.237 3.33872C10.7509 4.35408 11.0079 5.56896 11.0079 6.98337C11.0079 8.40222 10.7509 9.62154 10.237 10.6413C9.72743 11.6611 8.99484 12.4437 8.0393 12.9891C7.08801 13.5344 5.94985 13.8071 4.62483 13.8071ZM2.75833 11.3397H4.51016C5.32556 11.3397 6.01143 11.1889 6.56777 10.8874C7.12835 10.5815 7.54879 10.1093 7.82908 9.47078C8.11362 8.82787 8.25589 7.99873 8.25589 6.98337C8.25589 5.97688 8.11362 5.15439 7.82908 4.51591C7.54879 3.87743 7.13047 3.40744 6.57413 3.10594C6.0178 2.80443 5.33193 2.65368 4.51653 2.65368H2.75833V11.3397Z"
                                    fill="black"
                                />
                                <path
                                    d="M12.7103 13.8071V0.186223H21.5013V2.56057H15.4686V5.80618H21.049V8.18052H15.4686V11.4328H21.5268V13.8071H12.7103Z"
                                    fill="black"
                                />
                                <path
                                    d="M30.4308 4.10356C30.3798 3.56706 30.1611 3.15028 29.7747 2.85321C29.3882 2.55614 28.8637 2.4076 28.2012 2.4076C27.751 2.4076 27.3709 2.47411 27.0609 2.60713C26.7509 2.73571 26.5131 2.91528 26.3475 3.14584C26.1861 3.37641 26.1054 3.638 26.1054 3.93064C26.0969 4.17451 26.1457 4.38733 26.2519 4.56912C26.3623 4.75091 26.5131 4.90831 26.7042 5.04133C26.8953 5.16991 27.1161 5.28298 27.3667 5.38052C27.6173 5.47363 27.8848 5.55344 28.1694 5.61995L29.3415 5.91259C29.9106 6.04561 30.4329 6.22296 30.9086 6.44466C31.3842 6.66635 31.7962 6.93903 32.1444 7.26271C32.4927 7.58638 32.7623 7.9677 32.9534 8.40665C33.1488 8.8456 33.2486 9.34885 33.2528 9.91639C33.2486 10.75 33.0447 11.4727 32.6413 12.0846C32.2421 12.692 31.6645 13.1642 30.9086 13.5012C30.1569 13.8337 29.2502 14 28.1885 14C27.1352 14 26.2179 13.8315 25.4365 13.4945C24.6593 13.1576 24.052 12.6587 23.6146 11.9981C23.1814 11.333 22.9542 10.5105 22.933 9.53064H25.6021C25.6319 9.98733 25.7571 10.3686 25.978 10.6746C26.2031 10.9761 26.5025 11.2044 26.8762 11.3596C27.2542 11.5104 27.681 11.5857 28.1566 11.5857C28.6238 11.5857 29.0293 11.5148 29.3733 11.3729C29.7216 11.231 29.9913 11.0337 30.1824 10.781C30.3735 10.5283 30.469 10.2378 30.469 9.90974C30.469 9.6038 30.382 9.34663 30.2078 9.13824C30.038 8.92985 29.7874 8.75249 29.4562 8.60617C29.1291 8.45986 28.7278 8.32684 28.2522 8.20713L26.8316 7.83468C25.7317 7.55534 24.8632 7.11861 24.2261 6.52447C23.5891 5.93032 23.2727 5.13001 23.277 4.12351C23.2727 3.29881 23.4829 2.57831 23.9076 1.962C24.3366 1.34569 24.9248 0.864608 25.6722 0.518765C26.4196 0.172922 27.269 0 28.2203 0C29.1886 0 30.0337 0.172922 30.7557 0.518765C31.4819 0.864608 32.0467 1.34569 32.4502 1.962C32.8536 2.57831 33.0617 3.29216 33.0745 4.10356H30.4308Z"
                                    fill="black"
                                />
                                <path
                                    d="M37.5257 0.186223V13.8071H34.7673V0.186223H37.5257Z"
                                    fill="black"
                                />
                                <path
                                    d="M48.1051 4.58907C48.0159 4.2654 47.8906 3.97941 47.7293 3.73112C47.5679 3.47838 47.3704 3.26556 47.1368 3.09264C46.9075 2.91528 46.6442 2.78005 46.3469 2.68694C46.0539 2.59382 45.729 2.54727 45.3723 2.54727C44.7055 2.54727 44.1194 2.72019 43.6141 3.06603C43.1129 3.41188 42.7222 3.91512 42.4419 4.57577C42.1616 5.23199 42.0215 6.03452 42.0215 6.98337C42.0215 7.93222 42.1595 8.73919 42.4356 9.40428C42.7116 10.0694 43.1023 10.577 43.6077 10.9273C44.1131 11.2732 44.7097 11.4461 45.3977 11.4461C46.022 11.4461 46.555 11.3308 46.9967 11.1002C47.4426 10.8652 47.7823 10.5349 48.0159 10.1093C48.2537 9.68361 48.3727 9.18036 48.3727 8.59952L48.9332 8.68599H45.5697V6.51781H51.0291V8.23373C51.0291 9.43088 50.787 10.4595 50.3029 11.3197C49.8187 12.1755 49.152 12.8361 48.3026 13.3017C47.4532 13.7628 46.4807 13.9933 45.385 13.9933C44.1619 13.9933 43.0874 13.7118 42.1616 13.1487C41.2358 12.5812 40.5139 11.7764 39.9957 10.7344C39.4819 9.68804 39.2249 8.44656 39.2249 7.00998C39.2249 5.90594 39.3778 4.92161 39.6836 4.05701C39.9936 3.18796 40.4268 2.45194 40.9831 1.84893C41.5395 1.24592 42.1871 0.787015 42.9261 0.472209C43.665 0.157403 44.4656 0 45.3277 0C46.0666 0 46.7546 0.113064 47.3916 0.339193C48.0287 0.560887 48.5935 0.875693 49.0861 1.28361C49.583 1.69153 49.9886 2.17704 50.3029 2.74014C50.6171 3.29881 50.8189 3.91512 50.908 4.58907H48.1051Z"
                                    fill="black"
                                />
                                <path
                                    d="M63.6725 0.186223V13.8071H61.29L55.6141 5.2342H55.5185V13.8071H52.7602V0.186223H55.1809L60.8122 8.75249H60.9269V0.186223H63.6725Z"
                                    fill="black"
                                />
                                <path
                                    d="M64.5022 13.8071L66.6681 0.186223H70.2099L69.3691 5.50689H74.0576L74.8985 0.186223H78.4404L76.2745 13.8071H72.7326L73.5735 8.48646H68.8849L68.0441 13.8071H64.5022Z"
                                    fill="black"
                                />
                                <path
                                    d="M83.3232 0.186223L81.1573 13.8071H77.6154L79.7813 0.186223H83.3232Z"
                                    fill="black"
                                />
                                <path
                                    d="M88.2283 0.186223L89.3749 9.79002H89.4768L93.6812 0.186223H97.6818L91.2095 13.8071H86.3681L84.2277 0.186223H88.2283Z"
                                    fill="black"
                                />
                                <path
                                    d="M96.4316 13.8071L98.5975 0.186223H108L107.516 3.1658H101.655L101.298 5.50689H106.675L106.191 8.48646H100.814L100.458 10.8276H106.293L105.809 13.8071H96.4316Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="175"
                                height="22"
                                viewBox="0 0 700 91"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.8853 89.7463H0.952393V1.21045H31.1327C39.626 1.21045 46.9375 2.9829 53.067 6.52779C59.1965 10.0439 63.9105 15.1018 67.2088 21.7017C70.5347 28.3015 72.1977 36.1983 72.1977 45.3919C72.1977 54.6144 70.5347 62.54 67.2088 69.1686C63.9105 75.7973 59.169 80.8841 52.9845 84.429C46.8275 87.9739 39.4611 89.7463 30.8853 89.7463ZM18.8049 73.7078H30.1432C35.4206 73.7078 39.8597 72.7279 43.4604 70.7682C47.0887 68.7796 49.8098 65.7102 51.6239 61.5601C53.4655 57.3812 54.3863 51.9918 54.3863 45.3919C54.3863 38.8497 53.4655 33.5036 51.6239 29.3534C49.8098 25.2033 47.1024 22.1484 43.5017 20.1886C39.9009 18.2288 35.4618 17.2489 30.1844 17.2489H18.8049V73.7078Z"
                                    fill="white"
                                />
                                <path
                                    d="M83.2162 89.7463V1.21045H140.113V16.6437H101.069V37.7401H137.186V53.1734H101.069V74.3131H140.278V89.7463H83.2162Z"
                                    fill="white"
                                />
                                <path
                                    d="M197.907 26.6732C197.577 23.1859 196.162 20.4768 193.661 18.5458C191.159 16.6149 187.765 15.6494 183.477 15.6494C180.563 15.6494 178.103 16.0817 176.097 16.9463C174.09 17.7821 172.551 18.9493 171.479 20.448C170.434 21.9466 169.912 23.647 169.912 25.5492C169.857 27.1343 170.173 28.5177 170.861 29.6993C171.575 30.8809 172.551 31.904 173.788 32.7686C175.025 33.6044 176.454 34.3393 178.076 34.9734C179.697 35.5786 181.429 36.0974 183.271 36.5297L190.857 38.4318C194.54 39.2964 197.921 40.4492 201 41.8903C204.078 43.3313 206.744 45.1037 208.998 47.2076C211.252 49.3115 212.997 51.79 214.234 54.6432C215.499 57.4964 216.145 60.7675 216.172 64.4565C216.145 69.8747 214.825 74.5724 212.214 78.5496C209.63 82.498 205.892 85.5674 201 87.7577C196.134 89.9192 190.266 91 183.394 91C176.578 91 170.641 89.9048 165.583 87.7145C160.553 85.5241 156.622 82.2819 153.791 77.9876C150.988 73.6646 149.517 68.3184 149.38 61.9492H166.655C166.847 64.9177 167.658 67.3962 169.088 69.3848C170.544 71.3446 172.482 72.8288 174.901 73.8375C177.347 74.8174 180.11 75.3074 183.188 75.3074C186.212 75.3074 188.837 74.8462 191.063 73.924C193.317 73.0017 195.062 71.7192 196.299 70.0765C197.536 68.4337 198.155 66.546 198.155 64.4133C198.155 62.4247 197.591 60.7531 196.464 59.3986C195.365 58.044 193.743 56.8912 191.599 55.9401C189.483 54.9891 186.885 54.1245 183.807 53.3463L174.612 50.9254C167.493 49.1097 161.872 46.2709 157.749 42.409C153.626 38.5471 151.579 33.345 151.606 26.8028C151.579 21.4423 152.939 16.759 155.688 12.753C158.464 8.74695 162.271 5.61995 167.109 3.37197C171.946 1.12399 177.444 0 183.601 0C189.867 0 195.337 1.12399 200.01 3.37197C204.71 5.61995 208.366 8.74695 210.977 12.753C213.588 16.759 214.935 21.399 215.018 26.6732H197.907Z"
                                    fill="white"
                                />
                                <path
                                    d="M243.827 1.21045V89.7463H225.974V1.21045H243.827Z"
                                    fill="white"
                                />
                                <path
                                    d="M312.299 29.829C311.722 27.7251 310.911 25.8662 309.867 24.2523C308.822 22.6095 307.544 21.2261 306.032 20.1021C304.548 18.9493 302.844 18.0703 300.92 17.4651C299.023 16.8599 296.921 16.5572 294.612 16.5572C290.296 16.5572 286.503 17.6812 283.232 19.9292C279.989 22.1772 277.46 25.4483 275.646 29.7425C273.832 34.0079 272.925 39.2244 272.925 45.3919C272.925 51.5595 273.818 56.8047 275.605 61.1278C277.391 65.4508 279.92 68.7508 283.191 71.0276C286.462 73.2755 290.324 74.3995 294.777 74.3995C298.817 74.3995 302.267 73.6502 305.125 72.1515C308.011 70.6241 310.21 68.477 311.722 65.7102C313.261 62.9435 314.031 59.6724 314.031 55.8969L317.659 56.4589H295.89V42.3658H331.224V53.5192C331.224 61.3007 329.657 67.987 326.524 73.5781C323.39 79.1405 319.075 83.4347 313.577 86.4608C308.08 89.4581 301.786 90.9568 294.694 90.9568C286.778 90.9568 279.824 89.1267 273.832 85.4665C267.84 81.7775 263.167 76.5466 259.814 69.7739C256.488 62.9723 254.825 54.9026 254.825 45.5648C254.825 38.3886 255.814 31.9905 257.793 26.3705C259.8 20.7218 262.604 15.9376 266.204 12.0181C269.805 8.0985 273.997 5.1156 278.779 3.06936C283.562 1.02312 288.743 0 294.323 0C299.106 0 303.559 0.734917 307.682 2.20475C311.805 3.64577 315.46 5.692 318.649 8.34347C321.865 10.9949 324.49 14.1508 326.524 17.8109C328.558 21.4423 329.863 25.4483 330.441 29.829H312.299Z"
                                    fill="white"
                                />
                                <path
                                    d="M413.055 1.21045V89.7463H397.635L360.899 34.0223H360.28V89.7463H342.428V1.21045H358.095L394.543 56.8912H395.285V1.21045H413.055Z"
                                    fill="white"
                                />
                                <path
                                    d="M418.425 89.7463L432.443 1.21045H455.367L449.924 35.7948H480.27L485.712 1.21045H508.636L494.618 89.7463H471.694L477.136 55.162H446.791L441.349 89.7463H418.425Z"
                                    fill="white"
                                />
                                <path
                                    d="M540.238 1.21045L526.22 89.7463H503.296L517.315 1.21045H540.238Z"
                                    fill="white"
                                />
                                <path
                                    d="M571.985 1.21045L579.407 63.6352H580.066L607.278 1.21045H633.17L591.281 89.7463H559.946L546.093 1.21045H571.985Z"
                                    fill="white"
                                />
                                <path
                                    d="M625.079 89.7463L639.097 1.21045H699.952L696.819 20.5777H658.887L656.579 35.7948H691.377L688.243 55.162H653.445L651.136 70.3791H688.903L685.769 89.7463H625.079Z"
                                    fill="white"
                                />
                            </svg>
                        )}
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                        <svg
                            width="40"
                            height="38"
                            viewBox="0 0 208 194"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M46.3329 38.5923C46.3329 36.5453 47.1966 34.582 48.734 33.1345C50.2713 31.687 52.3564 30.8738 54.5306 30.8738H71.4095C72.8485 30.8739 74.2621 31.2305 75.5083 31.908C76.7544 32.5854 77.7892 33.5598 78.5087 34.7331L86.9441 48.4874C88.0312 50.2612 88.3253 52.3689 87.7619 54.3469C87.1985 56.3249 85.8236 58.0111 83.9397 59.0347C82.0558 60.0582 79.8172 60.3352 77.7164 59.8047C75.6156 59.2742 73.8246 57.9796 72.7376 56.2058L66.6795 46.3108H54.5306C52.3564 46.3108 50.2713 45.4976 48.734 44.0501C47.1966 42.6026 46.3329 40.6394 46.3329 38.5923ZM206.04 100.842L178.668 145.478C177.948 146.651 176.913 147.625 175.667 148.303C174.421 148.98 173.007 149.337 171.568 149.337H122.424L97.4207 190.106C96.7012 191.279 95.6664 192.253 94.4202 192.931C93.1741 193.608 91.7605 193.965 90.3215 193.965H35.6022C34.1632 193.965 32.7497 193.608 31.5035 192.931C30.2573 192.253 29.2225 191.279 28.503 190.106L1.09828 145.478C0.378783 144.304 0 142.973 0 141.618C0 140.263 0.378783 138.932 1.09828 137.759L26.1339 96.9825L1.09828 56.2058C0.378783 55.0325 0 53.7015 0 52.3466C0 50.9917 0.378783 49.6607 1.09828 48.4874L28.503 3.85923C29.2225 2.68591 30.2573 1.71156 31.5035 1.03413C32.7497 0.356692 34.1632 3.44183e-05 35.6022 0H90.3379C91.7769 3.44183e-05 93.1905 0.356692 94.4366 1.03413C95.6828 1.71156 96.7176 2.68591 97.4371 3.85923L122.424 44.6282H171.519C172.958 44.6282 174.372 44.9848 175.618 45.6623C176.864 46.3397 177.899 47.3141 178.618 48.4874L206.04 93.1233C206.759 94.2966 207.138 95.6276 207.138 96.9825C207.138 98.3374 206.759 99.6684 206.04 100.842ZM17.6985 52.3466L40.3322 89.264H84.7143L107.807 51.6134L85.6079 15.4369H40.3322L17.6985 52.3466ZM107.791 142.352L84.7143 104.701H40.3322L17.6985 141.618L40.3322 178.528H85.6079L107.791 142.352ZM189.439 96.9825L166.806 60.0651H122.424L99.3471 97.7543L121.53 133.931H166.806L189.439 96.9825Z"
                                fill="#DCEB2E"
                            />
                        </svg>
                    </Box>
                    <Box
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        {anchorElNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="108"
                                height="14"
                                viewBox="0 0 108 14"
                                fill="none"
                            >
                                <path
                                    d="M4.62483 13.8071H0V0.186223H4.66305C5.97533 0.186223 7.10499 0.458908 8.05204 1.00428C8.99909 1.54521 9.72743 2.32336 10.237 3.33872C10.7509 4.35408 11.0079 5.56896 11.0079 6.98337C11.0079 8.40222 10.7509 9.62154 10.237 10.6413C9.72743 11.6611 8.99484 12.4437 8.0393 12.9891C7.08801 13.5344 5.94985 13.8071 4.62483 13.8071ZM2.75833 11.3397H4.51016C5.32556 11.3397 6.01143 11.1889 6.56777 10.8874C7.12835 10.5815 7.54879 10.1093 7.82908 9.47078C8.11362 8.82787 8.25589 7.99873 8.25589 6.98337C8.25589 5.97688 8.11362 5.15439 7.82908 4.51591C7.54879 3.87743 7.13047 3.40744 6.57413 3.10594C6.0178 2.80443 5.33193 2.65368 4.51653 2.65368H2.75833V11.3397Z"
                                    fill="black"
                                />
                                <path
                                    d="M12.7103 13.8071V0.186223H21.5013V2.56057H15.4686V5.80618H21.049V8.18052H15.4686V11.4328H21.5268V13.8071H12.7103Z"
                                    fill="black"
                                />
                                <path
                                    d="M30.4308 4.10356C30.3798 3.56706 30.1611 3.15028 29.7747 2.85321C29.3882 2.55614 28.8637 2.4076 28.2012 2.4076C27.751 2.4076 27.3709 2.47411 27.0609 2.60713C26.7509 2.73571 26.5131 2.91528 26.3475 3.14584C26.1861 3.37641 26.1054 3.638 26.1054 3.93064C26.0969 4.17451 26.1457 4.38733 26.2519 4.56912C26.3623 4.75091 26.5131 4.90831 26.7042 5.04133C26.8953 5.16991 27.1161 5.28298 27.3667 5.38052C27.6173 5.47363 27.8848 5.55344 28.1694 5.61995L29.3415 5.91259C29.9106 6.04561 30.4329 6.22296 30.9086 6.44466C31.3842 6.66635 31.7962 6.93903 32.1444 7.26271C32.4927 7.58638 32.7623 7.9677 32.9534 8.40665C33.1488 8.8456 33.2486 9.34885 33.2528 9.91639C33.2486 10.75 33.0447 11.4727 32.6413 12.0846C32.2421 12.692 31.6645 13.1642 30.9086 13.5012C30.1569 13.8337 29.2502 14 28.1885 14C27.1352 14 26.2179 13.8315 25.4365 13.4945C24.6593 13.1576 24.052 12.6587 23.6146 11.9981C23.1814 11.333 22.9542 10.5105 22.933 9.53064H25.6021C25.6319 9.98733 25.7571 10.3686 25.978 10.6746C26.2031 10.9761 26.5025 11.2044 26.8762 11.3596C27.2542 11.5104 27.681 11.5857 28.1566 11.5857C28.6238 11.5857 29.0293 11.5148 29.3733 11.3729C29.7216 11.231 29.9913 11.0337 30.1824 10.781C30.3735 10.5283 30.469 10.2378 30.469 9.90974C30.469 9.6038 30.382 9.34663 30.2078 9.13824C30.038 8.92985 29.7874 8.75249 29.4562 8.60617C29.1291 8.45986 28.7278 8.32684 28.2522 8.20713L26.8316 7.83468C25.7317 7.55534 24.8632 7.11861 24.2261 6.52447C23.5891 5.93032 23.2727 5.13001 23.277 4.12351C23.2727 3.29881 23.4829 2.57831 23.9076 1.962C24.3366 1.34569 24.9248 0.864608 25.6722 0.518765C26.4196 0.172922 27.269 0 28.2203 0C29.1886 0 30.0337 0.172922 30.7557 0.518765C31.4819 0.864608 32.0467 1.34569 32.4502 1.962C32.8536 2.57831 33.0617 3.29216 33.0745 4.10356H30.4308Z"
                                    fill="black"
                                />
                                <path
                                    d="M37.5257 0.186223V13.8071H34.7673V0.186223H37.5257Z"
                                    fill="black"
                                />
                                <path
                                    d="M48.1051 4.58907C48.0159 4.2654 47.8906 3.97941 47.7293 3.73112C47.5679 3.47838 47.3704 3.26556 47.1368 3.09264C46.9075 2.91528 46.6442 2.78005 46.3469 2.68694C46.0539 2.59382 45.729 2.54727 45.3723 2.54727C44.7055 2.54727 44.1194 2.72019 43.6141 3.06603C43.1129 3.41188 42.7222 3.91512 42.4419 4.57577C42.1616 5.23199 42.0215 6.03452 42.0215 6.98337C42.0215 7.93222 42.1595 8.73919 42.4356 9.40428C42.7116 10.0694 43.1023 10.577 43.6077 10.9273C44.1131 11.2732 44.7097 11.4461 45.3977 11.4461C46.022 11.4461 46.555 11.3308 46.9967 11.1002C47.4426 10.8652 47.7823 10.5349 48.0159 10.1093C48.2537 9.68361 48.3727 9.18036 48.3727 8.59952L48.9332 8.68599H45.5697V6.51781H51.0291V8.23373C51.0291 9.43088 50.787 10.4595 50.3029 11.3197C49.8187 12.1755 49.152 12.8361 48.3026 13.3017C47.4532 13.7628 46.4807 13.9933 45.385 13.9933C44.1619 13.9933 43.0874 13.7118 42.1616 13.1487C41.2358 12.5812 40.5139 11.7764 39.9957 10.7344C39.4819 9.68804 39.2249 8.44656 39.2249 7.00998C39.2249 5.90594 39.3778 4.92161 39.6836 4.05701C39.9936 3.18796 40.4268 2.45194 40.9831 1.84893C41.5395 1.24592 42.1871 0.787015 42.9261 0.472209C43.665 0.157403 44.4656 0 45.3277 0C46.0666 0 46.7546 0.113064 47.3916 0.339193C48.0287 0.560887 48.5935 0.875693 49.0861 1.28361C49.583 1.69153 49.9886 2.17704 50.3029 2.74014C50.6171 3.29881 50.8189 3.91512 50.908 4.58907H48.1051Z"
                                    fill="black"
                                />
                                <path
                                    d="M63.6725 0.186223V13.8071H61.29L55.6141 5.2342H55.5185V13.8071H52.7602V0.186223H55.1809L60.8122 8.75249H60.9269V0.186223H63.6725Z"
                                    fill="black"
                                />
                                <path
                                    d="M64.5022 13.8071L66.6681 0.186223H70.2099L69.3691 5.50689H74.0576L74.8985 0.186223H78.4404L76.2745 13.8071H72.7326L73.5735 8.48646H68.8849L68.0441 13.8071H64.5022Z"
                                    fill="black"
                                />
                                <path
                                    d="M83.3232 0.186223L81.1573 13.8071H77.6154L79.7813 0.186223H83.3232Z"
                                    fill="black"
                                />
                                <path
                                    d="M88.2283 0.186223L89.3749 9.79002H89.4768L93.6812 0.186223H97.6818L91.2095 13.8071H86.3681L84.2277 0.186223H88.2283Z"
                                    fill="black"
                                />
                                <path
                                    d="M96.4316 13.8071L98.5975 0.186223H108L107.516 3.1658H101.655L101.298 5.50689H106.675L106.191 8.48646H100.814L100.458 10.8276H106.293L105.809 13.8071H96.4316Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="120"
                                height="14"
                                viewBox="0 0 700 91"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.8853 89.7463H0.952393V1.21045H31.1327C39.626 1.21045 46.9375 2.9829 53.067 6.52779C59.1965 10.0439 63.9105 15.1018 67.2088 21.7017C70.5347 28.3015 72.1977 36.1983 72.1977 45.3919C72.1977 54.6144 70.5347 62.54 67.2088 69.1686C63.9105 75.7973 59.169 80.8841 52.9845 84.429C46.8275 87.9739 39.4611 89.7463 30.8853 89.7463ZM18.8049 73.7078H30.1432C35.4206 73.7078 39.8597 72.7279 43.4604 70.7682C47.0887 68.7796 49.8098 65.7102 51.6239 61.5601C53.4655 57.3812 54.3863 51.9918 54.3863 45.3919C54.3863 38.8497 53.4655 33.5036 51.6239 29.3534C49.8098 25.2033 47.1024 22.1484 43.5017 20.1886C39.9009 18.2288 35.4618 17.2489 30.1844 17.2489H18.8049V73.7078Z"
                                    fill="white"
                                />
                                <path
                                    d="M83.2162 89.7463V1.21045H140.113V16.6437H101.069V37.7401H137.186V53.1734H101.069V74.3131H140.278V89.7463H83.2162Z"
                                    fill="white"
                                />
                                <path
                                    d="M197.907 26.6732C197.577 23.1859 196.162 20.4768 193.661 18.5458C191.159 16.6149 187.765 15.6494 183.477 15.6494C180.563 15.6494 178.103 16.0817 176.097 16.9463C174.09 17.7821 172.551 18.9493 171.479 20.448C170.434 21.9466 169.912 23.647 169.912 25.5492C169.857 27.1343 170.173 28.5177 170.861 29.6993C171.575 30.8809 172.551 31.904 173.788 32.7686C175.025 33.6044 176.454 34.3393 178.076 34.9734C179.697 35.5786 181.429 36.0974 183.271 36.5297L190.857 38.4318C194.54 39.2964 197.921 40.4492 201 41.8903C204.078 43.3313 206.744 45.1037 208.998 47.2076C211.252 49.3115 212.997 51.79 214.234 54.6432C215.499 57.4964 216.145 60.7675 216.172 64.4565C216.145 69.8747 214.825 74.5724 212.214 78.5496C209.63 82.498 205.892 85.5674 201 87.7577C196.134 89.9192 190.266 91 183.394 91C176.578 91 170.641 89.9048 165.583 87.7145C160.553 85.5241 156.622 82.2819 153.791 77.9876C150.988 73.6646 149.517 68.3184 149.38 61.9492H166.655C166.847 64.9177 167.658 67.3962 169.088 69.3848C170.544 71.3446 172.482 72.8288 174.901 73.8375C177.347 74.8174 180.11 75.3074 183.188 75.3074C186.212 75.3074 188.837 74.8462 191.063 73.924C193.317 73.0017 195.062 71.7192 196.299 70.0765C197.536 68.4337 198.155 66.546 198.155 64.4133C198.155 62.4247 197.591 60.7531 196.464 59.3986C195.365 58.044 193.743 56.8912 191.599 55.9401C189.483 54.9891 186.885 54.1245 183.807 53.3463L174.612 50.9254C167.493 49.1097 161.872 46.2709 157.749 42.409C153.626 38.5471 151.579 33.345 151.606 26.8028C151.579 21.4423 152.939 16.759 155.688 12.753C158.464 8.74695 162.271 5.61995 167.109 3.37197C171.946 1.12399 177.444 0 183.601 0C189.867 0 195.337 1.12399 200.01 3.37197C204.71 5.61995 208.366 8.74695 210.977 12.753C213.588 16.759 214.935 21.399 215.018 26.6732H197.907Z"
                                    fill="white"
                                />
                                <path
                                    d="M243.827 1.21045V89.7463H225.974V1.21045H243.827Z"
                                    fill="white"
                                />
                                <path
                                    d="M312.299 29.829C311.722 27.7251 310.911 25.8662 309.867 24.2523C308.822 22.6095 307.544 21.2261 306.032 20.1021C304.548 18.9493 302.844 18.0703 300.92 17.4651C299.023 16.8599 296.921 16.5572 294.612 16.5572C290.296 16.5572 286.503 17.6812 283.232 19.9292C279.989 22.1772 277.46 25.4483 275.646 29.7425C273.832 34.0079 272.925 39.2244 272.925 45.3919C272.925 51.5595 273.818 56.8047 275.605 61.1278C277.391 65.4508 279.92 68.7508 283.191 71.0276C286.462 73.2755 290.324 74.3995 294.777 74.3995C298.817 74.3995 302.267 73.6502 305.125 72.1515C308.011 70.6241 310.21 68.477 311.722 65.7102C313.261 62.9435 314.031 59.6724 314.031 55.8969L317.659 56.4589H295.89V42.3658H331.224V53.5192C331.224 61.3007 329.657 67.987 326.524 73.5781C323.39 79.1405 319.075 83.4347 313.577 86.4608C308.08 89.4581 301.786 90.9568 294.694 90.9568C286.778 90.9568 279.824 89.1267 273.832 85.4665C267.84 81.7775 263.167 76.5466 259.814 69.7739C256.488 62.9723 254.825 54.9026 254.825 45.5648C254.825 38.3886 255.814 31.9905 257.793 26.3705C259.8 20.7218 262.604 15.9376 266.204 12.0181C269.805 8.0985 273.997 5.1156 278.779 3.06936C283.562 1.02312 288.743 0 294.323 0C299.106 0 303.559 0.734917 307.682 2.20475C311.805 3.64577 315.46 5.692 318.649 8.34347C321.865 10.9949 324.49 14.1508 326.524 17.8109C328.558 21.4423 329.863 25.4483 330.441 29.829H312.299Z"
                                    fill="white"
                                />
                                <path
                                    d="M413.055 1.21045V89.7463H397.635L360.899 34.0223H360.28V89.7463H342.428V1.21045H358.095L394.543 56.8912H395.285V1.21045H413.055Z"
                                    fill="white"
                                />
                                <path
                                    d="M418.425 89.7463L432.443 1.21045H455.367L449.924 35.7948H480.27L485.712 1.21045H508.636L494.618 89.7463H471.694L477.136 55.162H446.791L441.349 89.7463H418.425Z"
                                    fill="white"
                                />
                                <path
                                    d="M540.238 1.21045L526.22 89.7463H503.296L517.315 1.21045H540.238Z"
                                    fill="white"
                                />
                                <path
                                    d="M571.985 1.21045L579.407 63.6352H580.066L607.278 1.21045H633.17L591.281 89.7463H559.946L546.093 1.21045H571.985Z"
                                    fill="white"
                                />
                                <path
                                    d="M625.079 89.7463L639.097 1.21045H699.952L696.819 20.5777H658.887L656.579 35.7948H691.377L688.243 55.162H653.445L651.136 70.3791H688.903L685.769 89.7463H625.079Z"
                                    fill="white"
                                />
                            </svg>
                        )}
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "end",
                            alignItems: "center",
                        }}
                    >
                        {pages.map(([name, route]) => {
                            if (name === "Contact Us") {
                                return (
                                    <Scroll to={route} key={name} offset={-50}>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2,
                                                color: "#bfcc2b",
                                                padding: "10px",
                                                textTransform: "lowercase",
                                            }}
                                        >
                                            <p className="navbar-button mx-1">
                                                {name}
                                            </p>
                                        </Button>
                                    </Scroll>
                                )
                            } else {
                                return (
                                    <Link to={route} key={name}>
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2,
                                                color:
                                                    location.pathname === route
                                                        ? "#7b61ff"
                                                        : "#bfcc2b",
                                                padding: "10px",
                                                textTransform: "lowercase",
                                            }}
                                        >
                                            <p className="navbar-button mx-1">
                                                {name}
                                            </p>
                                        </Button>
                                    </Link>
                                )
                            }
                        })}
                        <button className="workwithus-bar fw-bold" disabled>
                            Work With Us
                        </button>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            {!anchorElNav ? (
                                <MenuIcon sx={{ color: "white" }} />
                            ) : (
                                <CloseIcon sx={{ color: "black" }} />
                            )}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            {anchorElNav && (
                <div
                    id="header-nav"
                    className={
                        "collapse navbar-collapse " +
                        (anchorElNav ? "show" : "")
                    }
                >
                    <NavMenu setIsNavModalClose={handleCloseNavMenu} />
                </div>
            )}
        </AppBar>
    )
}
export default ResponsiveAppBar
