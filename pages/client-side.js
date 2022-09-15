import axios from "axios";
import { useState, useEffect } from "react";

const clientSide = () => {
  const [resData, setResData] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
	const headers = {
		"Cache-Control": "no-cache",
	}

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url, { headers });

      const promises = res.data.results.map((pokemon) => {
        return axios.get(pokemon.url);
      });

      const responses = await Promise.all(promises, { headers });

      const pokemonData = responses.map((r) => {
        return {
          name: r.data.name,
          image: r.data.sprites.front_default,
        };
      });

      setResData(pokemonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Client Side</h1>
      {resData.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} />
          </div>
        );
      })}
    </div>
  );
};

export default clientSide;
