import { useEffect } from "react"
import LandingPage from "../components/LandingPage"
import Result from "../components/Result"
import HowWeHelp from "../components/HowWeHelp"
import OurWork from "../components/OurWork"
import WeWorkedWith from "../components/WeWorkedWith"
import Contact from "../components/Contact"
import HowItWorks from "../components/HowItWorks"
import Achievements from "../components/Achievements"

export default function Homepage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <LandingPage></LandingPage>
            <Result></Result>
            <HowItWorks></HowItWorks>
            <HowWeHelp></HowWeHelp>
            <OurWork></OurWork>
            <div className="worked-with p-5">
                <WeWorkedWith></WeWorkedWith>
                <Achievements></Achievements>
            </div>
            <Contact></Contact>
        </>
    )
}
