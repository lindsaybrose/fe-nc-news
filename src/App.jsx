import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Home from "./components/Home";
import SingleArticle from "./components/SingleArticle";
import { useState, useContext } from "react";
import { createContext } from "react";
import Topics from "./components/Topics";

const UserContext = createContext("");

function App() {
  const [signedInUser, setSignedInUser] = useState("grumpy19");
  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
      <main className="container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topic" element={<Articles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </main>
    </UserContext.Provider>
  );
}

export default App;
