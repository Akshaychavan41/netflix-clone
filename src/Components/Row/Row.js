import axios from "axios";
import React, { useEffect, useState } from "react";
import "./row.css";
import ReactPlayer from "react-player/youtube";
import Player from "../Login/VideoPlayer/Player";
function Row(props) {
  const [movies, setMovies] = useState([]);
  const [playVideo, setPlayVideo] = useState(false);
  const [toggleVideo, setToggleVideo] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  const handleClick = async (e) => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/movie/${e.target.id}/videos?api_key=d3d69f2fdc05f901d200411dbeec8943&language=en-US`
    );
    const videokey = request.data?.results[0]?.key;
    if (videokey) {
      const videoLink = `https://www.youtube.com/embed/${videokey}?autoplay=1`;
      setVideoLink(videoLink);
      setPlayVideo(true);
    }
  };
  const toggleModal = () => {
    setPlayVideo(!playVideo);
  };
  console.log(window.innerWidth);
  return (
    <div className="movieRow">
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={handleClick}
              key={movie.id}
              id={movie.id}
              className={`row_poster ${props.islargeRow && "row_posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original${
                props.islargeRow || window.innerWidth < 450
                  ? movie.poster_path
                  : movie.backdrop_path
              }`}
            />
          );
        })}
      </div>
      {playVideo && (
        <Player url={videoLink} open={playVideo} toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default Row;
