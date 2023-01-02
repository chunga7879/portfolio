import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./components/Header"
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Document from "./pages/Document";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/documents" element={<Document />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
