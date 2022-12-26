import './App.css';
import {React, useEffect, useState} from 'react';
import Pokebox from './components/Pokebox';


function App() {
/* 
    const pokemonList = arrPok.map((value) => <li> {value.name} </li>) */
    return (
    <body className="App">
      <Pokebox id={10} />
    </body>
  );
}

export default App;
