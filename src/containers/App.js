import React, {Component} from "react";
import axios from "axios";
import classes from "./App.module.css";
import MovieList from "../components/MovieList/MovieList";

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {

    axios.get("http://localhost:5000/movies")
      .then(res => {
        this.setState({movies: res.data})
      })
  }

  render() {
    return (
      <div className={classes.App}>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
