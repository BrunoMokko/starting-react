import React from 'react';
import "./Recent.css";
import Img from './Img';
import wong from './images/people/wong.png'
import vogels from './images/people/vogels.png'
import recentOne from './images/recent/1.png'
import recentTwo from './images/recent/2.png'
import recentThree from './images/recent/3.png'
import recentFour from './images/recent/4.png'
import recentFive from './images/recent/5.png'
import recentSix from './images/recent/6.png'

function Recent() {
    return(
        <>
            <div className="container-recent">
                <div className="section__header">
                    <h2 className="section__title">Most Recent</h2>
                </div>
                <div className="recent">
                    <div className="recent__item">
                        <div className="recent__inner">
                            <div className="recent__photo">
                                <a href="#">
                                    <Img className="recent__img" url={recentOne} alt=""/>
                                </a>
                            </div>
                            <div className="card__text">
                                <a href="#">More</a>
                            </div>
                            <div className="recent__info">
                                <div className="recent__text">
                                    <div className="recent__title">
                                        <a href="#">Still Standing Tall</a>
                                    </div>
                                    <div className="recent__subtitle">Life begins at the end of your comfort zone.</div>
                                </div>
                                <div className="recent__contacts">
                                    <div className="recent__person">
                                        <div className="recent__icon">
                                            <img src={wong} alt=""/>
                                        </div>
                                        <div className="recent__name">William Wong</div>
                                    </div>
                                    <div className="recent__date">9/25/2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recent__item">
                        <div className="recent__inner">
                            <div className="recent__img">
                                <a href="#">
                                    <Img className="recent__img" url={recentTwo} alt=""/>
                                </a>
                            </div>
                            <div className="card__text">
                                <a href="#">More</a>
                            </div>
                            <div className="recent__info">
                                <div className="recent__text">
                                    <div className="recent__title">
                                        <a href="#">Sunny Side Up</a>
                                    </div>
                                    <div className="recent__subtitle">No place is ever as bad as they tell you it's
                                        going to be.
                                    </div>
                                </div>
                                <div className="recent__contacts">
                                    <div className="recent__person">
                                        <div className="recent__icon">
                                            <img src={vogels} alt=""/>
                                        </div>
                                        <div className="recent__name">Mat Vogels</div>
                                    </div>
                                    <div className="recent__date">9/25/2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recent__item">
                        <div className="recent__inner">
                            <div className="recent__img">
                                <a href="#">
                                    <Img className="recent__img" url={recentThree} alt=""/>
                                </a>
                            </div>
                            <div className="card__text">
                                <a href="#">More</a>
                            </div>
                            <div className="recent__info">
                                <div className="recent__text">
                                    <div className="recent__title">
                                        <a href="#">Water Falls</a>
                                    </div>
                                    <div className="recent__subtitle">We travel not to escape life, but for life not to
                                        escape us.
                                    </div>
                                </div>
                                <div className="recent__contacts">
                                    <div className="recent__person">
                                        <div className="recent__icon">
                                            <img src={vogels} alt=""/>
                                        </div>
                                        <div className="recent__name">Mat Vogels</div>
                                    </div>
                                    <div className="recent__date">9/25/2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent">
                    <div className="recent__item">
                        <div className="recent__inner">
                            <div className="recent__img">
                                <a href="#">
                                    <Img className="recent__img" url={recentFour} alt=""/>
                                </a>
                            </div>
                            <div className="card__text">
                                <a href="#">More</a>
                            </div>
                            <div className="recent__info">
                                <div className="recent__text">
                                    <div className="recent__title">
                                        <a href="#">Through the Mist</a>
                                    </div>
                                    <div className="recent__subtitle">Travel makes you see what a tiny place you occupy
                                        in the world.
                                    </div>
                                </div>
                                <div className="recent__contacts">
                                    <div className="recent__person">
                                        <div className="recent__icon">
                                            <img src={wong} alt=""/>
                                        </div>
                                        <div className="recent__name">William Wong</div>
                                    </div>
                                    <div className="recent__date">9/25/2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recent__item">
                        <div className="recent__inner">
                            <div className="recent__img">
                                <a href="#">
                                    <Img className="recent__img" url={recentFive} alt=""/>
                                </a>
                            </div>
                            <div className="card__text">
                                <a href="#">More</a>
                            </div>
                            <div className="recent__info">
                                <div className="recent__text">
                                    <div className="recent__title">
                                        <a href="#">Awaken Early</a>
                                    </div>
                                    <div className="recent__subtitle">Not all those who wander are lost.</div>
                                </div>
                                <div className="recent__contacts">
                                    <div className="recent__person">
                                        <div className="recent__icon">
                                            <img src={vogels} alt=""/>
                                        </div>
                                        <div className="recent__name">Mat Vogels</div>
                                    </div>
                                    <div className="recent__date">9/25/2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recent__item">
                        <div className="recent__inner">
                            <div className="recent__photo">
                                <a href="#">
                                <Img className="recent__img" url={recentSix} alt=""/>
                                </a>
                            </div>
                            <div className="card__text">
                                <a href="#">More</a>
                            </div>
                            <div className="recent__info">
                                <div className="recent__text">
                                    <div className="recent__title">
                                        <a href="#">Try it Always</a>
                                    </div>
                                    <div className="recent__subtitle">The world is a book, and those who do not travel
                                        read only one page.
                                    </div>
                                </div>
                                <div className="recent__contacts">
                                    <div className="recent__person">
                                        <div className="recent__icon">
                                            <img src={vogels} alt=""/>
                                        </div>
                                        <div className="recent__name">Mat Vogels</div>
                                    </div>
                                    <div className="recent__date">9/25/2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recent;