import { Pokemon } from "@/app/pokemon/data";
import React from "react";
import PokemonRow from "./PokemonRow";

interface PokedexTableProps {
  pokemons: Pokemon[];
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
    <>
      <h1>Pokemon Table</h1>
      {pokemons.map((pokemon) => (
        <PokemonRow key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokedexTable;
