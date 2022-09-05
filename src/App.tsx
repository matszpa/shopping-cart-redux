import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import {SingleProducts} from "./pages/SingleProducts";
import {Products} from "./pages/Products";
import {Navbar} from "./components/Navbar";
import {Container} from "react-bootstrap";

function App() {

    return (
        <Container className="mb-4">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<SingleProducts/>}/>
            </Routes>
        </Container>
    )
}

export default App;
