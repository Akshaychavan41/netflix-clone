import React from "react";
import "./jumbo.css";
function Jumbotron({ id, title, subtitle, video, image, alt, direction }) {
  return (
    <div className={`jumbo__container ${direction}`}>
      <div className="jumbo__text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="jumbo__img">
        <img src={image} alt={alt} />
        {video && (
          <video
            className={`jumbo__video v${id}`}
            autoPlay
            muted
            playsInline
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

export default Jumbotron;
