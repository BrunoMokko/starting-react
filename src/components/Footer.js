import React from 'react';
import "./Footer.css";
import footerLogo from './images/footer-bg.png'

const footerStyle = {
    background: 'url('+ footerLogo +')',
}

function Footer() {
    return(
        <>
            <footer className="footer" style={footerStyle}>
                <div className="footer__container">
                    <div className="connection">
                        <div className="connection__title">Stay in Touch</div>
                        <form className="submit" action="/" method="post">
                            <input className="submit__input" type="email" name="name"
                                   placeholder="Enter your email address"/>
                                <button className="submit__btn" type="submit">Submit</button>
                        </form>
                        <header className="footer__nav">
                            <div className="header__footer">
                                <div className="logo">
                                    <a href="#">
                                        <h1>Escape.</h1>
                                    </a>
                                </div>
                                <nav className="navigation">
                                    <a href="#">Home</a>
                                    <a href="#">Categories</a>
                                    <a href="#">About</a>
                                    <a href="#">Contact</a>
                                </nav>
                            </div>
                        </header>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;