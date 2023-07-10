import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router, Route, Routes, Switch, BrowserRouter} from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import Experience from './Experience';
import Pictures from './Pictures';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/pictures" element={<Pictures />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;