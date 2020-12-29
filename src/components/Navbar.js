import React, { useState } from 'react'
import './Navbar.scss'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    }

    return (
        <nav>
            <p id="logo" ><span>F</span>reescrpt</p>

            <div id="nav-links" className={isOpen ? "open" : null} >
                <a href="#about">About</a>
                <a href="#writing">Writing</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <div id="hamburger-menu" onClick={toggle}>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}

export default Navbar
