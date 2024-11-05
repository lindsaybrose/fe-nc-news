import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
