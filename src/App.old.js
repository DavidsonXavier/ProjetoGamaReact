import React, {useState} from "react";
import axios from 'axios';

function App(){
  let [usuario, setUsuario]= useState('');

  usuario = !usuario ?  'blabla ' : usuario;

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(res => res.data)
      .then(data => {
        return data.filter(element => element.name === 'Wanted-Animals')
      })
      .then(resultado => console.log(...resultado))
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
        <h1>{usuario}</h1>
        <input className="usuarioInput" value={usuario} placeholder="Nome do Usuário" onChange={ e => setUsuario(e.target.value)}/>
        <button onClick={handlePesquisa}> Pesquisar </button>
    </React.Fragment>
  );
}


export default App;
