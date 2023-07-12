import InfoSlide from "./InfoSlide"
import Navbar from "../common/Navbar"
import "./Instructions.css"
import Slideshow from "./Slider"

function Instructions(){
    return(
        <>
        <Navbar></Navbar>
        <div className="grid-container">
            <h1>Cómo Jugar</h1>
            <Slideshow/>
            <nav>
                <a href="/notimplementedyet"> IR A JUGAR </a>
            </nav>
        </div>
        </>
    )
}

export default Instructions