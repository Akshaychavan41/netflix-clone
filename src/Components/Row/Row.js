import axios from "axios";
import React, { useEffect, useState } from "react";
import "./row.css";
function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);
  console.log(movies);
  return (
    <div className="movieRow">
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${props.islargeRow && "row_posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original${
                props.islargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
