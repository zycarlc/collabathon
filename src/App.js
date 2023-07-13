import "./App.css"
import Homepage from "./pages/HomePage"

import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from "./components/themes/Header"
import Project from "./pages/Projects"
import Footer from "./components/themes/Footer"
import AboutUs from "./pages/AboutUs"

function App() {
    return (
        <>
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={<Homepage></Homepage>} />
                <Route path="/projects" element={<Project></Project>} />
                <Route path="/aboutus" element={<AboutUs></AboutUs>} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
