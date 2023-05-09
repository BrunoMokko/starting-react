import React from "react";

function Img(props) {
    return(
        <>
        <img className={props.name} src={props.url} alt={props.alt}/>
        </>
    )
}
export default Img;