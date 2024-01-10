import React from "react";

const SingleMovie = (props) => {
  return (
    <img
      src={props.img}
      className="poster"
      alt="description"
      style={{ width: "95%", height: "200px", objectFit: "cover", objectPosition: "50% 10%" }}
    />
  );
};

export default SingleMovie;
