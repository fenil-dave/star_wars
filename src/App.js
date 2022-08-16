import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./features/characters/Characters";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Characters />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
