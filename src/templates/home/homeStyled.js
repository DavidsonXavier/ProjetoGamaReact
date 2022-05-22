import styled from 'styled-components';

export const conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const conteiner2 = styled.div`
    display: flex;
`

export const imagem = styled.img`
    height: 60%;
    width: 60%;
    margin-bottom: 20px;
`

export const input = styled.input`
    padding: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

`

export const button = styled.button`
    background-color: #000;
    color: #fff;
    font-weight: bold;

    cursor: pointer;
    
    padding: 5px;
    border-bottom-right-radius:  5px;
    border-top-right-radius: 5px;

    transition: 300ms;

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
    `

export const spanError = styled.span`
    font-size: 0.9rem;
    margin-top: 3px;
    color:red;
`