import "./App.css"
import Homepage from "./pages/HomePage"

import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from "./components/themes/Header"
import Project from "./pages/Projects"

function App() {
    return (
        <>
            <ResponsiveAppBar />

            <Routes>
                <Route path="/" element={<Homepage></Homepage>} />
                <Route path="/projects" element={<Project></Project>} />
            </Routes>
        </>
    )
}

export default App
