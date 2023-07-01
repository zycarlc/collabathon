import * as React from "react"
import LandingPage from "../components/LandingPage"
import Result from "../components/Result"
import HowWeHelp from "../components/HowWeHelp"
import OurWork from "../components/OurWork"

export default function Homepage() {
    return (
        <>
            <LandingPage></LandingPage>
            <Result></Result>
            <HowWeHelp></HowWeHelp>
            <OurWork></OurWork>
        </>
    )
}
