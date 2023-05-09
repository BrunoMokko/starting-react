import React from "react";
import Header from './Header';
import Intro from './Intro';
import NavBar from './NavBar';
import Cards from './Cards';
import Recent from './Recent';
import Footer from './Footer';


function Home(){
    return(
        <>
            <Header />
            <Intro />
            <NavBar />
            <Cards />
            <Recent />
            <Footer />
        </>
    )
}
export default Home;