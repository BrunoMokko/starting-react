import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Page from './components/Page';


function Wp() {

    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
            </Routes>
        </>

    );
};

export default Wp;
