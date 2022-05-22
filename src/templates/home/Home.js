import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";


import * as S from  './homeStyled';

export default function Home (){

    const urlImg = 'https://lh3.googleusercontent.com/Eqky-nok6uaZbukLwf7xsq0HIsBp0z7YI0G1UwOxcz0HjNkH4UKn9TJGg14YpQXY_TyaNLYvM-MI7MfLzq7g3XgrRQ=w640-h400-e365-rj-sc0x00ffffff';

    const navigate = useNavigate();
    let [usuario, setUsuario]= useState('');

    let [notExists, setNotExists] = useState(false);

    
    useEffect(()=> {localStorage.clear('repositoriesName');}, [])

    function handlePesquisa() {  
    const url = 'https://api.github.com/users/';
    axios.get(`${url}${usuario}/repos`)
        .then(res => {
            const repositories = res.data;
            const repositoriesName = repositories.map((repository) => {
                return repository.name;
            })
            localStorage.setItem('user',usuario);
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            
            navigate('/repos');

            }
        )
        
        .catch((erro) => {
            console.log(erro);
            setNotExists(true)
        })
    }

 
    return (
    
    <S.conteiner>
        <S.imagem src={urlImg} alt='Gama' />
        <S.conteiner2>
            <S.input className="usuarioInput" value={usuario} placeholder="Nome do Usuário" onChange={ e => setUsuario(e.target.value)}/>
            <S.button onClick={handlePesquisa}> Pesquisar </S.button>
        </S.conteiner2>
        {notExists ? <S.spanError> Ocorreu um erro! Tente Novamente</S.spanError> : ''  }
    </S.conteiner>
    )
}