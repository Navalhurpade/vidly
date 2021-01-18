import React from "react";
import joi from "joi-browser";
import { getGenre, getGenres } from "./../services/genreService";
import { saveMovie, getMovie } from "./../services/movieService";
import Form from "./comman/Form";
import DropDownList from "./comman/DropDownList";

class NewMovie extends Form {
  state = {
    selectedGenre: "Genre",
    data: {
      _id: "",
      title: "",
      numberInStock: "",
      dailyRentalRate: "",
      genreId: "",
    },
    genres: [],
    errors: {},
  };

  async componentDidMount() {
    this.populateGenres();
    this.populateMovie();
  }

  async populateGenres() {
    let { genres } = this.state;
    genres = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      let { selectedGenre } = this.state;
      const _id = this.props.match.params._id;

      if (_id) {
        const { data: foundMovie } = await getMovie(_id);
        selectedGenre = foundMovie.genre.name;

        foundMovie.genreId = foundMovie.genre._id;
        delete foundMovie.genre;

        this.setState({ data: foundMovie, selectedGenre });
      }
    } catch (error) {
      //If can't find a movie with given _id then redirect user to Not-found page !
      if (error.response && error.response.status === 404)
        this.props.history.replace("/not-found !");
    }
  }

  schema = {
    _id: joi.string().allow(""),
    dailyRentalRate: joi.number().greater(1).less(20).required(),
    genreId: joi.string().allow(""),
    title: joi.string().required(),
    numberInStock: joi.number().greater(1).label("Stocks").required(),
  };

  handleSelection = async (selectedGenre) => {
    const data = { ...this.state.data };

    const selectedGenreObject = await getGenre(selectedGenre);

    data.genreId = selectedGenreObject._id;
    this.setState({ data, selectedGenre });
  };

  doSubmit = () => {
    console.log(" Movie Submited !");
  };

  inputHandling = (input) => {};

  onSave = () => {};

  handleSubmition = async (e) => {
    const newMovie = this.state.data;

    e.preventDefault();

    // const newMovie = {
    //   _id: _id,
    //   title: title,
    //   genreId: genreId,
    //   numberInStock: numberInStock,
    //   dailyRentalRate: dailyRentalRate,
    // };

    await saveMovie(newMovie);

    this.props.history.push("/movies");
  };

  render() {
    const {
      handleSubmition,
      renderButton,
      renderInput,
      handleSelection,
      onSave,

      state,
    } = this;

    const { genres } = state;

    return (
      <React.Fragment>
        <h1>New Movie</h1>
        <form onSubmit={handleSubmition}>
          {renderInput("title", "Title")}
          <DropDownList
            lable={state.selectedGenre}
            options={genres}
            onSelect={handleSelection}
          />
          <br />
          {renderInput("numberInStock", "Number In Stock")}
          {renderInput("dailyRentalRate", "Rate")}
          {renderButton("Save", onSave)}
        </form>
      </React.Fragment>
    );
  }
}

export default NewMovie;
