import styled from 'styled-components';

export const Conteiner = styled.div`
    height: 100%;
    width: 100%;
    margin: 10px auto;
    padding: 10px;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 35px;
    margin-bottom: 20px;
`

export const List = styled.ul`
    list-style: none;

`

export const ListItem = styled.li`

    text-align: center;
    padding: 10px;
    background-color: black;
    color: white;
    font-size: 20px;

    margin-bottom: 10px;
`

export const buttonBack = styled.button`
    padding: 5px;
    text-align: center;
    width: 150px;
    background-color: #3498DB;
    color: white;
    transition: 300ms;


    cursor: pointer;

    border-radius: 5px;

    &:hover{
        background-color: #85C1E9;
    }

`

export const link = styled.a`
    text-decoration: none;

    &:hover{
        text-decoration: none;
    }
`
