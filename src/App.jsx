import './App.css';
import {React, useEffect, useState} from 'react';
import Pokebox from './components/Pokebox';


function App() {
/* 
    const pokemonList = arrPok.map((value) => <li> {value.name} </li>) */
    return (
    <body className="App">
      <Pokebox id={1} />
      <Pokebox id={2} />
      <Pokebox id={3} />
      <Pokebox id={4} />
      <Pokebox id={5} />
    </body>
  );
}

export default App;
