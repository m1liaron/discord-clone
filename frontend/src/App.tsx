import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home/HomePage.tsx";
import * as React from "react";

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
        </Routes>
    </Router>
)

export default App
