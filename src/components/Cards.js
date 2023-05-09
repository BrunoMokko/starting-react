import React from 'react';
import "./Cards.css";
import Img from './Img';
import postOne from './images/posts/1.png'
import postTwo from './images/posts/2.png'
import wong from './images/people/wong.png'
import vogels from './images/people/vogels.png'


function Cards() {
    return(
        <>
            <div className="container-cards">
                <div className="section__header">
                    <h2 className="section__title">Featured Posts</h2>
                </div>
                <div className="card">
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <a href="#">
                                    <Img name="post__img" url={postOne} alt=""/>
                                </a>
                            </div>
                            <div className="card__info">
                                <div className="card__title">
                                    <a href="#">The Road Ahead</a>
                                </div>
                                <div className="card__subtitle">The road ahead might be paved - it might not be.</div>
                                <div className="card__contacts">
                                    <div className="person">
                                        <div className="card__icon">
                                            <Img url={vogels} alt=""/>
                                        </div>
                                        <div className="card__name">Mat Vogels</div>
                                    </div>
                                    <div className="card__date">September 25, 2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <a href="#">
                                    <Img name="post__img" url={postTwo} alt=""/>
                                </a>
                            </div>
                            <div className="card__info">
                                <div className="card__title">
                                    <a href="#">From Top Down</a>
                                </div>
                                <div className="card__subtitle">Once a year, go someplace you've never been before.
                                </div>
                                <div className="card__contacts">
                                    <div className="person">
                                        <div className="card__icon">
                                            <Img url={wong} alt=""/>
                                        </div>
                                        <div className="card__name">William Wong</div>
                                    </div>
                                    <div className="card__date">September 25, 2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards