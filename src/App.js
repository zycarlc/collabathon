import "./App.css"
import Homepage from "./pages/HomePage"

import { Routes, Route } from "react-router-dom"
import ResponsiveAppBar from "./components/themes/Header"
import { useState } from "react"

function App() {
    return (
        <>
            <ResponsiveAppBar />

            <Routes>
                <Route path="/" element={<Homepage></Homepage>} />
            </Routes>
        </>
    )
}

export default App
