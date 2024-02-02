import React from "react";
import blogData from "../data/blog";
import MyHeader from "./Header";
import MyAbout from "./About";
import MyArticleList from "./ArticleList";
import MyArticle from "./Article";

console.log(blogData);


function App() {
  return (
    <div className="App">
      
    
    <MyHeader name={blogData.name}/>
    <MyAbout about={blogData.about} image={blogData.image}/>
    <MyArticleList posts={blogData.posts}/>
    <MyArticle title={blogData.posts.title} preview={blogData.posts.preview} date={blogData.posts.date} />
    </div>

  );
}

export default App;
