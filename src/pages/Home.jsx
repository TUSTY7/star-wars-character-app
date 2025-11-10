import React, { useState,useEffect } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import SearchFilterBar from "../components/SearchFilterBar";

const Home = () => {
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filteredChars, setFilteredChars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { characters, loading, error, next, prev } = useFetchCharacters(page);

 
  useEffect(() => {
    if (!searchTerm) setFilteredChars([]);
  }, [characters]);

  const handlePageChange = (type) => {
    setPage((prevPage) => (type === "next" ? prevPage + 1 : prevPage - 1));
  };

 
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term) return setFilteredChars([]);
    const result = characters.filter((c) =>
      c.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredChars(result);
  };

 
  const handleFilter = (type, value) => {
    if (!type || !value) return setFilteredChars([]);
    const result = characters.filter((c) => {
      if (type === "homeworld") return c.homeworld.includes(value);
      if (type === "film") return c.films.some((f) => f.includes(value));
      if (type === "species") return c.species.some((s) => s.includes(value));
      return false;
    });
    setFilteredChars(result);
  };

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const displayList = filteredChars.length ? filteredChars : characters;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
        Star Wars Characters
      </h1>

      <SearchFilterBar onSearch={handleSearch} onFilter={handleFilter} />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayList.map((char) => (
          <CharacterCard
            key={char.name}
            character={char}
            onClick={() => setSelectedCharacter(char)}
          />
        ))}
      </div>

      <Pagination next={next} prev={prev} onPageChange={handlePageChange} />

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default Home;
