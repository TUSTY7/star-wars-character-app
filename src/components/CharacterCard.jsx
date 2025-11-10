import React from "react";

const CharacterCard = ({ character, onClick }) => {
  const bgColors = {
    Human: "bg-blue-200",
    Droid: "bg-gray-200",
    Wookiee: "bg-amber-200",
    Other: "bg-green-200",
  };

  return (
    
    <div
      onClick={onClick}
      className={`rounded-2xl p-4 shadow-md cursor-pointer hover:scale-105 transition-all ${bgColors[character.speciesName] || "bg-green-100"}`}
    >
      <img
        src={`https://picsum.photos/200?random=${character?.name}`}
        alt={character.name}
        className="rounded-lg mb-2 w-full h-40 object-cover"
      />
      <h2 className="text-lg font-semibold text-center">{character?.name}</h2>
    </div>
  );
};

export default CharacterCard;
