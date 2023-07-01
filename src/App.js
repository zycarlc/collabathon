import "./App.css"
import FullScreenHeader from "./components/themes/Header"
import Homepage from "./pages/HomePage"

function App() {
    return (
        <div style={{ position: "relative" }}>
            <div id="main-wrapper">
                <FullScreenHeader></FullScreenHeader>
                <div id="content" role="main">
                    <Homepage />
                </div>
            </div>
        </div>
    )
}

export default App
