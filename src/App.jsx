import './App.css';
import {React, useEffect, useState} from 'react';
import Pokebox from './components/Pokebox';



function App() {
    const [pokeCard, setPokeCard] = useState(Array(5).fill(1));
    const List = pokeCard.map((value,index) => <Pokebox id={index+1} key={index+1}> </Pokebox>)
    return (
    <main className="App"> 
    {List}
    </main>
  );
}


export default App;
