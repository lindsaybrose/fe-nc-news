import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
