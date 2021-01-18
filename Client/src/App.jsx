/* eslint-disable */
import React, { Component } from "react";
import Movie from "./components/movie";
import NavBar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import LoginForm from "./components/LogInForm";
import Register from "./components/ReisterForm";
import NewMovie from "./components/NewMovie";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar></NavBar>
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/movie/new/:_id?" component={NewMovie} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginForm} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" exact component={Movie} />
          <Redirect from="/" exact to="/movies" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
