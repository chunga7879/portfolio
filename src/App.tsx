import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "@components/Header";
import Home from "@pages/Home";
import Project from "@pages/Project";
import Experience from "@pages/Experience";
import Education from "@pages/Education";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Education />} />
                <Route path="/" element={<Project />} />
                <Route path="/" element={<Experience />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
