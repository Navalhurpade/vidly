import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movie from "./components/movie";
import NavBar from "./components/Navbar";
import Customers from "./components/customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";
import LoginForm from "./components/LogInForm";
import Register from "./components/ReisterForm";
import NewMovie from "./components/NewMovie";
import Logout from "./components/Logout";
import { getCurrentUser } from "./services/authService";
import ProtectedRoute from "./components/PotectectedRoute";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    try {
      const token = getCurrentUser();
      this.setState({ user: token });
    } catch (error) {}
  }

  render() {
    const { user } = this.state;
    return (
      <main className="container">
        <NavBar user={user}></NavBar>
        <Switch>
          <Route path="/customers" component={Customers} />
          <ProtectedRoute path="/movie/new/:_id?" component={NewMovie} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route
            path="/movies"
            exact
            render={(props) => <Movie {...props} user={user} />}
          />
          <Redirect from="/" exact to="/movies" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
