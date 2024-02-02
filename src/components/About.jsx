import React from "react";
import App from "./App";

function MyAbout({about, image="https://via.placeholder.com/215"}){
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p> {about} </p>




        </aside>
    )

}
export default MyAbout