import "./App.css"
import Homepage from "./pages/HomePage"

import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from "./components/themes/Header"

function App() {
    return (
        <>
            <div style={{ position: "relative" }}>
                <ResponsiveAppBar />
                <Routes>
                    <Route path="/" element={<Homepage></Homepage>} />
                </Routes>
            </div>
        </>
    )
}

export default App
