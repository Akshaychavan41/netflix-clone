import React from "react";
import requests from "../Request";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Row from "./Row/Row";

function Homescreen(props) {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <Row
        title="Netflix Originals"
        islargeRow
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default Homescreen;
