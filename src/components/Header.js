import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header () {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <h1>Escape.</h1>
                    </div>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <Link to="categories">Categories</Link>
                        <Link to="about">About</Link>
                        <Link to="contact">Contact</Link>
                    </nav>
                    <div className="burger">
                        <a href="#">
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;