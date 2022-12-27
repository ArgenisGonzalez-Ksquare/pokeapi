import './App.css';
import {React, useEffect, useState} from 'react';
import Pokebox from './components/Pokebox';



function App() {
    const [pokeCard, setPokeCard] = useState([1,2,3,4,5]);
    const List = pokeCard.map((value) => <Pokebox id={value} key={value}> </Pokebox>)
    return (
    <main className="App"> 
    {List}
    </main>
  );
}


export default App;
