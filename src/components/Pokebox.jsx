import { cleanup } from '@testing-library/react';
import {Fragment, React, useEffect, useState} from 'react';

const Pokebox = (id) => {

    const [pokemon, setPokemon] =  useState([]);
    const [imgUrl, setImgUrl] = useState([]);
    
    
    useEffect(() => {
      const fetchPokemon = async (number) => {
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${number.id}`);
        const pokemonData = await req.json();
        setPokemon(pokemonData);
        setImgUrl(pokemonData.sprites.other["official-artwork"].front_default);
      }
      fetchPokemon(id)
    },[setPokemon])


    
    return(
    <div className="pokemonBox">
        {imgUrl && (<img src={imgUrl} alt="pokemon image" />)}
        <h1>{pokemon.name} </h1>
        <p> Order#{` ${pokemon.order}`} - Base experience:{` ${pokemon.base_experience}`}</p>
    </div>
    )
}


export default Pokebox;