import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../App.css"


const Header = () => {
    return <nav>
        <h1>PHOENIX</h1>
        {/* <h2>The Data Security Platform</h2> */}
        <main>
            <HashLink to={'/#home'}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#services"}>Services</HashLink>
            <HashLink to={'/#contact'}>Contact</HashLink>
            {/* <Link to={'/licensing'}>Dashboard</Link> */}
            <a href="http://localhost:3001" target="_blank">Dashboard</a>

        </main>

    </nav>
}

export default Header;