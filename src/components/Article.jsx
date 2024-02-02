import React from "react";
import App from "./App";


function MyArticle({title, preview, date="January 1, 1970"}){

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>




    )



}
export default MyArticle