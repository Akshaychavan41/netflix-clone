import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "../../Request";
import Player from "../Login/VideoPlayer/Player";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const [playVideo, setPlayVideo] = useState(false);
  const [videoLink, setVideoLink] = useState("");

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

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${
          window.innerWidth < 450 ? movie.poster_path : movie.backdrop_path
        }")`,
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie.original_name}</h1>
        <div className="banner__buttons">
          <button
            onClick={handleClick}
            id={movie.id}
            className="banner__button"
          >
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        {window.innerWidth > 450 && (
          <h1 className="banner__desc">
            {movie?.overview?.length > 150
              ? movie.overview.substring(0, 150)
              : movie.overview}
          </h1>
        )}
      </div>
      {playVideo && (
        <Player url={videoLink} open={playVideo} toggleModal={toggleModal} />
      )}
      <div className="banner--fadeButtom"></div>
    </div>
  );
}

export default Banner;
