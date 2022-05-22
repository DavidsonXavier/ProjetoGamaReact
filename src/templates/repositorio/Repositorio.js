import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import * as S from './repositorioStyled'


export default function Repositorio () {
    const [repositories, setRepositories] = useState([]);
    const [user, setUser] = useState(null);

    const navegacao = useNavigate ();

    

    useEffect(() => {        
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);

        let usuario =  localStorage.getItem('user');
        setUser(usuario);

        setRepositories(repositoriesName);       
        if(!repositoriesName) navegacao('/');
    }, [navegacao]);


    const voltarParaRaiz = () => {
        navegacao('/');
    }


    return (
        <S.Conteiner>
            <S.Title> Repositorios</S.Title>
            <S.List>
                {
                    repositories.map((repository, index) => {                             
                        return <S.link href={`http://github.com/${user}/${repository}`} target='_blank' key={repository}><S.ListItem key={index}>{repository}</S.ListItem></S.link>
                        
                    })
                }
            </S.List>
            <S.buttonBack onClick={voltarParaRaiz}> Voltar</S.buttonBack>
        </S.Conteiner>
    )
}