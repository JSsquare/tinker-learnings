import PokemonRow from "../components/Pokemon/PokemonRow";
import PokedexTable from "../components/Pokemon/PokemonTable";
import { bulbasaur, pokemonArray } from "../src/app/pokemon/data";

const Pokemon = () => {
  return (
    <div>
      <h1>Pokemon Page</h1>
      <p>Welcome to the Pokemon page!</p>
      <PokemonRow pokemon={bulbasaur} />
      <PokedexTable pokemons={pokemonArray} />
    </div>
  );
};

export default Pokemon;
