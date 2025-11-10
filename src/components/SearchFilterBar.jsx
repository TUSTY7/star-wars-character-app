import React, { useState } from "react";

const SearchFilterBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter(filterType, filterValue);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4 justify-between">
     
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-3 py-2 w-48"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Search
        </button>
      </div>

     
      <div className="flex gap-2">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border rounded px-2 py-2"
        >
          <option value="">Filter By</option>
          <option value="homeworld">Homeworld</option>
          <option value="film">Film</option>
          <option value="species">Species</option>
        </select>

        <input
          type="text"
          placeholder="Enter filter value..."
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="border rounded px-3 py-2 w-40"
        />

        <button
          onClick={handleFilter}
          className="bg-green-500 text-white px-3 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default SearchFilterBar;
