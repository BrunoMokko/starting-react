import React from 'react';
import "./Intro.css";
import logo from './images/header.png';
import Img from './Img';
import {Link} from "react-router-dom";

function Intro() {

    return(
        <>
            <div className="intro">
                <Img url={logo}/>
                <div className="container container-intro">
                    <div className="intro__inner">
                        <h1 className="intro__title">Let's do it together.</h1>
                        <h2 className="intro__suptitle">We travel the world in search of stories. Come along for the
                            ride.</h2>
                        <Link className="btn" to="page">View Latest Posts</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Intro;