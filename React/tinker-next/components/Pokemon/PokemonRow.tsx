import { Pokemon } from "@/app/pokemon/data";
import Image from "next/image";

const PokemonRow = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Image
        src={pokemon.sprite}
        alt={pokemon.name}
        width={50}
        height={50}
        style={{ marginRight: "10px" }}
      />
      <div>
        <div>
          <strong>ID:</strong> {pokemon.id}
        </div>
        <div>
          <strong>Name:</strong> {pokemon.name}
        </div>
        <div>
          <strong>Type:</strong> {pokemon.types.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default PokemonRow;
