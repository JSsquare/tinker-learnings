import React from "react";
import PokemonRow from "../components/Pokemon/PokemonRow";
import PokedexTable from "../components/Pokemon/PokemonTable";
import PokemonTypeSelection from "../components/Pokemon/PokemonTypeSelection";
import { bulbasaur, pokemonArray } from "../src/app/pokemon/data";

const Pokemon = () => {
  const [selectedType, setSelectedType] = React.useState<string>("");

  const selectType = React.useCallback((type: string) => {
    setSelectedType(type);
  }, []);

  const getPokemonsBySelectedType = React.useCallback((type: string) => {
    if (!type) return [];
    return pokemonArray.filter((pokemon) =>
      pokemon.types.includes(type.toLowerCase())
    );
  }, []);

  return (
    <div>
      <h1>Pokemon Page</h1>
      <p>Welcome to the Pokemon page!</p>
      <PokemonRow pokemon={bulbasaur} />
      <PokedexTable pokemons={pokemonArray} />
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={selectType}
        pokemons={getPokemonsBySelectedType(selectedType)}
      />
    </div>
  );
};

export default Pokemon;
