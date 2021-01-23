import React, { Component } from "react";
import { getMovies, deleteMovie } from "./../services/movieService";
import Pagination from "./comman/Pagination";
import Paginate from "../utils/paginate";
import ListGroup from "./comman/ListGroup";
import MoviesTable from "./MovieTable";
import { getGenres, getGenre } from "../services/genreService";
import _ from "lodash";
import queryString from "query-string";
import { Link } from "react-router-dom";
import Input from "./comman/Input";
import { toast, ToastContainer } from "react-toastify";

class movie extends Component {
  state = {
    allMovies: [],
    currentPageNo: 1,
    selectedGenre: "AllGenre",
    pageSize: 4,
    genres: [],
    search: "",
    sortColumn: { path: "title", order: "asc" },
  };

  //Initialising States in CompontDidMount And adding "Allgenre"
  async componentDidMount() {
    let data = await getGenres();
    const genres = [
      { _id: "d8fd87fdsdf98df8sdg8f76g", name: "AllGenre" },
      ...data,
    ];

    this.setState({
      genres,
      allMovies: await getMovies(),
    });
  }

  //Handing Movie Delete button for movie ! and deletiing a movie with same ID
  handleDelete = async (id) => {
    const { allMovies } = this.state;
    const originalMovies = [...allMovies];

    let movieInDb = allMovies.find((m) => m._id === id);
    allMovies.splice(allMovies.indexOf(movieInDb), 1);

    this.setState({
      allMovies,
    });

    try {
      await deleteMovie(id);
    } catch (error) {
      if (error.response && error.response.status === 403)
        toast.error("You are not authorize to do it !");
      else if (error.response && error.response.status === 400)
        toast.error("Please login frist !");
      else toast.error("This movie is already deleted !");

      this.setState({ allMovies: originalMovies });
    }
  };

  //Handing the Like button. Toggling on press !
  handleLike = (movie) => {
    const movieInDb = this.state.allMovies;
    movieInDb.map((m) => {
      if (movie.id === m.id) {
        movie.liked = !movie.liked;
        return null;
      }
      return null;
    });
    this.setState({ movies: movieInDb });
  };

  //Handling Pagination Component , Getting page number And updating the state to render the specified page
  handlePageChange = (page) => {
    this.setState({ currentPageNo: page });
  };

  //Handling Selection of Genres and Updating State of "selectedGenre" and
  //setting it to the NAME of genre also reseting page number to 1
  handleGenre = (genre) => {
    this.setState({
      currentPageNo: 1,
      selectedGenre: genre,
      search: "",
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      currentPageNo,
      selectedGenre,
      allMovies,
      pageSize,
      sortColumn,
      search,
    } = this.state;

    let filterdMovies = allMovies;

    if (search) {
      filterdMovies = allMovies.filter((m, index, array) =>
        m.title.toLowerCase().startsWith(search.toLowerCase())
          ? array[index]
          : null
      );
    } else {
      //Filtering the movies based On selected Genre
      // By cheking if selected Genre is selected or Not
      // AND(&&) Cheking if selected Genre is NOT "AllGenre", if "allGenre"
      // is not selected returning All movies
      filterdMovies =
        selectedGenre && selectedGenre !== "AllGenre"
          ? allMovies.filter((g) => {
              return g.genre.name === selectedGenre;
            })
          : allMovies;
    }

    //Sorting The Movies by the Culumn
    const sortedMovies = _.orderBy(
      filterdMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    //After Sorting Movies by Column, paginating them and Storing them in constant movies
    const movies = Paginate(sortedMovies, pageSize, currentPageNo);

    return { moviesCount: filterdMovies.length, data: movies };
  };

  updateMovie = () => {
    //Reading search query
    const query = this.props.location.search;

    //if search query is falsy (Not Present) then returning All movies From databases !
    if (!query) return getMovies();

    //if query Found !, parsing the search string into an object
    const data = queryString.parse(query);

    let selectedGenre = getGenre(data.genre);

    //Defining a newMovie Object
    const newMovie = {
      _id: data._id,
      title: data.title,
      genre: selectedGenre,
      numberInStock: parseInt(data.numberInStock),
      dailyRentalRate: parseInt(data.dailyRentalRate),
      publishDate: new Date(),
      liked: false,
    };

    // pushing new Movie into allMovies object from database
    const allMovies = getMovies();
    const isMovieExist = allMovies.filter((m) => m._id === newMovie._id);

    if (isMovieExist.length) {
      console.log("Exesting Movie Found Updating it");
      const index = allMovies.findIndex((m) => m._id === newMovie._id);
      allMovies.splice(index, 1);
      allMovies.push(newMovie);
      this.props.history.push("/movies");
    } else {
      console.log("Exesting Movie Not Found ! Creating");
      allMovies.push(newMovie);
      //Finally Routing user to /movies
      this.props.history.push("/movies");
    }

    // returning the updated AllMovies Object !
    return allMovies;
  };

  handleSearch = (e) => {
    this.setState({
      search: e.currentTarget.value,
      currentPageNo: 1,
      selectedGenre: "AllGenre",
    });
  };

  render() {
    //Destructuring Lots Of const from "this", "State" and "state.allMovies"
    const {
      state,
      handleLike,
      handleDelete,
      handlePageChange,
      handleGenre,
      handleSort,
      getPagedData,
      props,
    } = this;
    const {
      currentPageNo,
      selectedGenre,
      allMovies,
      pageSize,
      genres,
      sortColumn,
      search,
    } = state;
    const { length: moviesLength } = allMovies;

    //Showing No Movies message if All movies are deleted !
    if (moviesLength === 0) return <h3>"Their are NO Movies In database"</h3>;

    const { data: movies, moviesCount } = getPagedData();

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={handleGenre}
            />
          </div>

          <div className="col">
            {
              //props.user && (
              <Link to="/movie/new" className="btn btn-primary">
                New Movie
              </Link>
              // )}
            }

            <Input
              name="search"
              lable="Search"
              type="text"
              value={search}
              onChange={this.handleSearch}
              placeholder="Search for a movie ..."
            />
            {/*   Displaying Number of movies showing from database   */}
            <h4>{`Showing ${moviesCount} from Database`}</h4>
            <MoviesTable
              movies={movies}
              onDelete={handleDelete}
              onLike={handleLike}
              onSort={handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemCount={moviesCount}
              pageSize={pageSize}
              currentPageNo={currentPageNo}
              onClick={handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default movie;
