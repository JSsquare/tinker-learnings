import { Pokemon, pokemonTypes } from "@/app/pokemon/data";
import React from "react";
import PokedexTable from "./PokemonTable";

type PokemonTypeSelectionProps = {
  selectedType: string;
  selectType: (type: string) => void;
  pokemons: Pokemon[];
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
  pokemons,
}) => {
  return (
    <div>
      <label htmlFor="pokemon-type">Select Pokemon Type:</label>
      <select
        id="pokemon-type"
        value={selectedType}
        onChange={(e) => selectType(e.target.value)}
      >
        <option value="">None</option>
        {pokemonTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <PokedexTable pokemons={pokemons} />
    </div>
  );
};

export default PokemonTypeSelection;
