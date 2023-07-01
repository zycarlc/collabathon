import "./App.css"
import FullScreenHeader from "./components/themes/Header"
import Homepage from "./pages/HomePage"
import { Routes, Route, useLocation } from "react-router-dom"

function App() {
    return (
        <>
            <div style={{ position: "relative" }}>
                <div id="main-wrapper">
                    <FullScreenHeader></FullScreenHeader>
                    <div id="content" role="main">
                        <Homepage></Homepage>
                    </div>
                    <Routes>
                        <Route path="/" element={<Homepage></Homepage>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
