import React from "react";
import { Routes, Route, } from 'react-router-dom';
import Home from "./templates/home/Home.js";
import Repositorio from "./templates/repositorio/Repositorio";

export default function Rotas(){
    return (
    <Routes>
    
        <Route path='/' exact element={<Home />} />
        <Route path='/repos' element={<Repositorio />} />
        <Route path='/*' index element={<Home />} />
    </Routes>
    )
}