import * as React from "react"
import LandingPage from "../components/LandingPage"
import Result from "../components/Result"
import HowWeHelp from "../components/HowWeHelp"
import OurWork from "../components/OurWork"
import WeWorkedWith from "../components/WeWorkedWith"
import Contact from "../components/Contact"
import HowItWorks from "../components/HowItWorks"

export default function Homepage() {
    return (
        <>
            <LandingPage></LandingPage>
            <Result></Result>
            <HowItWorks></HowItWorks>
            <HowWeHelp></HowWeHelp>
            <OurWork></OurWork>
            <WeWorkedWith></WeWorkedWith>
            <Contact></Contact>
        </>
    )
}
