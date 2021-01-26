import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <div className="videoCard__date">
        <h5>{movie.release_date || movie.first_air_date}</h5>
        <p>
          <p>{movie.media_type && `${movie.media_type} *`}</p>
          <ThumbUpSharp /> <p>{movie.vote_count}</p>
        </p>
      </div>
    </div>
  );
});

export default VideoCard;
