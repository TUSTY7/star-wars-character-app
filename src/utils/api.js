import axios from "axios";

const API_URL = "https://swapi.dev/api";

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/people/?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch characters");
  }
};

export const fetchHomeworld = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch {
    return { name: "Unknown", terrain: "-", climate: "-", population: "-" };
  }
};
