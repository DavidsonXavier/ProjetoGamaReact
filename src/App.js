import React from "react";
// import Repositorio from "./Repositorio";
import { BrowserRouter } from 'react-router-dom';
import Routes  from './routes'


const App = () =>{
    return (
        <BrowserRouter>  
            <Routes/> 
        </BrowserRouter>                 
    )
}

export default App;