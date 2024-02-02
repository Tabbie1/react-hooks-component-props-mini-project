import React from "react";
import App from "./App";
import MyArticle from "./Article.jsx";


function MyArticleList({posts}){
        const articles = posts.map((post)=>(
            <MyArticle
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
        
             />


    ))
    

    return(
        <main> {articles} </main>
    )





}
export default MyArticleList