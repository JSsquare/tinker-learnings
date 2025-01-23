export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};
export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: ["grass"],
  sprite:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
};

export const charmander: Pokemon = {
  id: 4,
  name: "Charmander",
  types: ["fire"],
  sprite:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
};

export const squirtle: Pokemon = {
  id: 7,
  name: "Squirtle",
  types: ["water"],
  sprite:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
};

export const pikachu: Pokemon = {
  id: 25,
  name: "Pikachu",
  types: ["electric"],
  sprite:
    "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
};

export const pokemonArray: Pokemon[] = [
  bulbasaur,
  charmander,
  squirtle,
  pikachu,
];
