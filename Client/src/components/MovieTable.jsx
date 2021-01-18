import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./comman/Like";
import Table from "./comman/Table";

class MoviesTable extends Component {
  state = {};

  columns = [
    {
      path: "title",
      title: "Title",
      content: (movie) => this.handleMovieEdit(movie),
    },
    { path: "genre.name", title: "Genre" },
    { path: "numberInStock", title: "Stock" },
    { path: "dailyRentalRate", title: "Rate" },
    {
      key: "Like",
      content: (movie) => (
        <Like
          isLiked={movie.liked}
          onLike={() => {
            this.props.onLike(movie);
          }}
        />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          onClick={() => {
            this.props.onDelete(movie._id);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  handleMovieEdit = (movie) => {
    return <Link to={`/movie/new/${movie._id}`}>{movie.title}</Link>;
  };

  render() {
    const { movies, onSort, sortColumn } = this.props;
    const { columns } = this;

    return (
      <Table
        columns={columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
