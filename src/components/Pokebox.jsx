import {React, useEffect, useState} from 'react';

const Pokebox = (id) => {

    const [pokemon, setPokemon] =  useState([]);


    useEffect(() => {
      const fetchPokemon = async () => {
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await req.json();
        setPokemon(pokemonData)
        console.log(pokemonData)
      }
      fetchPokemon()

    },[setPokemon])

   

    
    return(
    <div className="pokemonBox">
{/*         <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon image" /> */}
        <h1>{pokemon.name} </h1>
        <p> {pokemon.order} - {pokemon.height}</p>
    </div>
    )
}


export default Pokebox;