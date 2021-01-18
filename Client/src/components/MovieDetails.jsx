import React from "react";

const MovieDetails = ({ match, history }) => {
  const handleSave = () => {
    history.push("/movies");
  };
  return (
    <div>
      <h1>Movie With ID {match.params.id} Got Clicked ! </h1>{" "}
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
