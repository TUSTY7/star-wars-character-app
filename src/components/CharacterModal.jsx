import React, { useEffect, useState } from "react";
import { fetchHomeworld } from "../utils/api";

const CharacterModal = ({ character, onClose }) => {
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    fetchHomeworld(character.homeworld).then(setHomeworld);
  }, [character]);

return (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 scale-100 hover:scale-[1.02] border border-yellow-500">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-500 text-2xl font-bold"
      >
        ✖
      </button>

      <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 border-b border-yellow-500 pb-2 text-center">
        {character.name}
      </h2>

      <div className="text-gray-300 space-y-2">
        <p><span className="font-semibold text-yellow-400">Height:</span> {character?.height} m</p>
        <p><span className="font-semibold text-yellow-400">Mass:</span> {character?.mass} kg</p>
        <p><span className="font-semibold text-yellow-400">Birth Year:</span> {character?.birth_year}</p>
        <p><span className="font-semibold text-yellow-400">Films:</span> {character?.films.length}</p>
        <p><span className="font-semibold text-yellow-400">Date Added:</span> {new Date().toLocaleDateString("en-GB")}</p>
      </div>

      {homeworld && (
        <div className="mt-6 bg-gray-600 p-4 rounded-lg border border-yellow-500 shadow-inner">
          <h3 className="font-bold text-yellow-400 mb-2">HomeWorld</h3>
          <p><span className="font-semibold text-yellow-400">Name:</span> {homeworld?.name}</p>
          <p><span className="font-semibold text-yellow-400">Terrain:</span> {homeworld?.terrain}</p>
          <p><span className="font-semibold text-yellow-400">Climate:</span> {homeworld?.climate}</p>
          <p><span className="font-semibold text-yellow-400">Population:</span> {homeworld?.population}</p>
        </div>
      )}
    </div>
  </div>
);

};

export default CharacterModal;
