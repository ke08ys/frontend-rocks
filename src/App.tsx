import React from 'react';

interface PokemonCard {
  id: number;
  image: string;
  name: string;
  types: string[];
}

const data: PokemonCard[] = [
  {
    id: 1,
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: ["grass", "poison"],
  },
  {
    id: 2,
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    types: ["fire"],
  },
  {
    id: 3,
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    types: ["water"],
  },
  {
    id: 4,
    name: "Chikorita",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
    types: ["grass"],
  },
  {
    id: 5,
    name: "Cyndaquil",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
    types: ["fire"],
  },
  {
    id: 6,
    name: "Totodile",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
    types: ["water"],
  },
];

const typeColor: { [key: string]: string } = {
  fire: "bg-red-400",
  grass: "bg-green-400",
  poison: "bg-purple-400",
  water: "bg-blue-400",
};

function getTypeColor(type: string): string {
  return typeColor[type] || "bg-gray-400"; 
}

export const App = () => {
  return (
    <div>
      <div className="flex flex-wrap bg-white">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="p-4 m-2 border rounded">
              <h3>{item.id} - {item.name}</h3>
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto w-24 h-24 object-contain"
              />
              <div className="flex">
                {item.types.map((type, index) => {
                  return (
                    <div key={index} className={`p-2 m-1 ${getTypeColor(type)}`}>
                      {type}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const Detail = () => {
  return <div>Detail Page</div>;
}

