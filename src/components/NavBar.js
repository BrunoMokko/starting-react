import React from 'react';
import "./NavBar.css";

function NavBar() {
    return(
        <>
            <nav className="navbar">
                <div className="container nav__block">
                    <div className="navbar__inner">
                        <a className="navbar__link" href="#">Nature</a>
                        <a className="navbar__link" href="#">Photography</a>
                        <a className="navbar__link" href="#">Relaxation</a>
                        <a className="navbar__link" href="#">Vacation</a>
                        <a className="navbar__link" href="#">Travel</a>
                        <a className="navbar__link" href="#">Adventure</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar