import React from "react";
import './Page.css';
import image from './images/page/bg.png';
import vogels from './images/people/vogels.png'
import Img from "./Img";
import Header from "./Header";

function Page() {
    return(
        <>
            <Header />
            <section className="section">
                <div className="intro">
                    <Img name="page_img" url={image} />
                </div>
            </section>
            <section className="section">
                <div className="page">
                    <div className="page__inner">
                        <h1 className="page__title">Still Standing Tall</h1>
                        <h2 className="page__suptitle">Life begins at the end of your comfort zone.</h2>
                        <div className="page__text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                                doloremque. Quaerat provident commodi consectetur veniam similique ad
                                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                                quasi aliquam eligendi, placeat qui corporis!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                                doloremque. Quaerat provident commodi consectetur veniam similique ad
                                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                                quasi aliquam eligendi, placeat qui corporis!</p>
                        </div>
                        <div className="card__contacts">
                            <div className="person">
                                <div className="card__icon">
                                    <Img url={vogels} alt=""/>
                                </div>
                                <div className="page-card__name">Mat Vogels</div>
                            </div>
                            <div className="page-card__date">September 25, 2015</div>
                        </div>
                    </div>
                    <nav className="aside__bar">
                        <div className="aside__inner">
                            <div className="aside__title">
                                <h2>Category</h2>
                            </div>
                            <a className="aside__link" href="#">Nature</a>
                            <a className="aside__link" href="#">Photography</a>
                            <a className="aside__link" href="#">Relaxation</a>
                            <a className="aside__link" href="#">Vacation</a>
                            <a className="aside__link" href="#">Travel</a>
                            <a className="aside__link" href="#">Adventure</a>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}
    export default Page;