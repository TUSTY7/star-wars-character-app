    import { useState, useEffect } from "react";
import { fetchCharacters } from "../utils/api";

export const useFetchCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchCharacters(page)
      .then((data) => {
        setCharacters(data?.results);
        setNext(data?.next);
        setPrev(data?.previous);
      })
      .catch(() => setError("Error fetching characters"))
      .finally(() => setLoading(false));
  }, [page]);

  return { characters, loading, error, next, prev };
};
