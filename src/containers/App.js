import React, {Component} from "react";
import axios from "axios";
import classes from "./App.module.css";
import MovieList from "../components/MovieList/MovieList";
import SeatSelection from "../components/SeatSelection/SeatSelection";

class App extends Component {

  state = {
    movies: [],
    showSeats: false
  }

  toggleSeats = () => {
    this.setState(prevState => {
      return {showSeats: !prevState.showSeats}
    });
  };

  componentDidMount() {

    axios.get("http://localhost:5000/movies")
      .then(res => {
        this.setState({movies: res.data})
      })
  }

  render() {
    return (
      <div className={classes.App}>
        <MovieList 
          movies={this.state.movies}
          toggleSeats={this.toggleSeats}/>
        <SeatSelection
          showSeats={this.state.showSeats}
          toggleSeats={this.toggleSeats}/>
      </div>
    );
  }
}

export default App;
