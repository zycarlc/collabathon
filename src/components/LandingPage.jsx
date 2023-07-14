import { Link as Scroll } from "react-scroll"

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div className="landing-page-content p-3">
                <p className="fs-1 fw-bold">
                    Crafting sweet, purposeful digital experiences
                </p>
                <p style={{ marginTop: "16px" }}>
                    Crafting purposeful designs that buzz with creativity,
                    elevating your online presence with captivating digital
                    experiences, at Design Hive.
                </p>
                <button className="workwithus fw-bold" disabled>
                    Work With Us
                </button>
                <Scroll to="contactus" offset={-50}>
                    <button className="contactus fw-bold">Contact Us</button>
                </Scroll>
            </div>
            <div className="logo-bg">
                <img className="logo-img" src="./logoicon.svg" alt="" />
            </div>
        </div>
    )
}
