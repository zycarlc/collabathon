import MeetTeam from "../components/MeetTeam"
import CompleteIdea from "../components/CompleteIdea"
import WeWorkedWith from "../components/WeWorkedWith"
import Contact from "../components/Contact"
import { Box } from "@mui/material"
import MeetTeamLg from "../components/MeetTeamLg"
import { useEffect } from "react"
import { Link as Scroll } from "react-scroll"

export default function AboutUs() {
    let profiles = [
        {
            name: "Jessica Hombre",
            title: ["GRAPHIC", "BRANDING", "UI / UX DESIGNER"],
            describe:
                "Jess is a multi-disciplinary creative who has recently expanded their skills to include UI/UX. Over the past 5+ years, she have worked creatively in various industries such as e-commerce, hospitality, fashion, marketing and start-ups, collaborating with diverse teams. This experience has made them an adaptable designer who thrives on continuous learning. Jess's goal is to use design to facilitate understanding and connections between people and their desired audiences, all while enjoying the process. ",
            img: "./ProfilePics/JessicaProfilePic.png",
        },
        {
            name: "Lucy Gao",
            title: ["RESEARCHER", "COPYWRITER", "UI / UX DESIGNER"],
            describe:
                "Lucy is a UX/UI designer with a passion for research and UX writing. With a background in healthcare as a former physiotherapist, Lucy is guided by her empathy for users, which allows her to design exceptional user-centred experiences. With a diverse career spanning different industries, Lucy is able to adopt a multi-faceted approach to problem solving, resulting in intuitive and delightful designs. ",
            img: "./ProfilePics/LucyProfilePic.png",
        },
        {
            name: "Eileen Zhang",
            title: ["UI / UX DESIGNER"],
            describe:
                "Eileen is an architect turned UX designer, bringing a unique blend of spatial expertise and artistic vision to her digital creations. Her user-centred designs are not only visually captivating but also highly functional, as she considers every interaction and user journey with meticulous attention to detail. Drawing inspiration from the built environment, Eileen’s interfaces exude harmony and balance, while her deep understanding of human behaviour ensures that her designs resonate with users on a profound level, creating memorable and immersive experiences.",
            img: "./ProfilePics/EileenProfilePic.png",
        },
        {
            name: "Zhenyu Chen",
            title: ["SOFTWARE ENGINEER"],
            describe:
                "Zhenyu, also known as Carl, is a skilled agricultural consultant who has seamlessly transitioned into the world of software engineering. With a deep understanding of the agricultural industry and its technological needs, Carl combines his domain expertise with his newfound programming skills to develop innovative and impactful software solutions. Carl’s ability to bridge the gap between agriculture and technology enables him to create efficient, user-friendly, and scalable software applications.",
            img: "./ProfilePics/ZhenyuProfilePic.png",
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="aboutus">
            <div className="landing-page">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-md-6 text-md-start">
                            <h1>About Us</h1>
                            <p style={{ marginTop: "16px" }}>
                                At DesignHIVE, we are not just designers and
                                developers; we are storytellers, problem
                                solvers, and pioneers of digital experiences. We
                                invite you to join us on this exciting journey,
                                where together, we will create remarkable
                                products that redefine the digital landscape.
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
            <CompleteIdea></CompleteIdea>
            <div className="worked-with p-5">
                <WeWorkedWith></WeWorkedWith>
            </div>
            <Box display={{ xs: "block", md: "none" }}>
                <div className="p-4">
                    <MeetTeam profiles={profiles}></MeetTeam>
                </div>
            </Box>
            <Box display={{ xs: "none", md: "block" }}>
                <div className="p-5">
                    <p className="fs-1 fw-bold">Meet the Team</p>
                    {profiles.map((profile, i) => {
                        return (
                            <MeetTeamLg profile={profile} key={i}></MeetTeamLg>
                        )
                    })}
                </div>
            </Box>
            <Contact></Contact>
        </div>
    )
}
