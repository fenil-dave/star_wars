import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Characters } from "./features/characters/Characters";
import { CharaceterDetail } from "./features/detail/Detail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Characters />} />
                    <Route path="/:id" element={<CharaceterDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
