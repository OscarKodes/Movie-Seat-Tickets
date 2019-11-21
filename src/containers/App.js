import React, {Component} from "react";
import axios from "axios";
import classes from "./App.module.css";
import MovieList from "../components/MovieList/MovieList";
import SeatSelection from "../components/SeatSelection/SeatSelection";

class App extends Component {

  state = {
    movies: [],
    showSeats: false,
    selectedMovie: {},
    selectedTime: ""
  }

  componentDidMount() {
    axios.get("http://localhost:5000/movies")
      .then(res => {
        this.setState({movies: res.data})
      })
  }

  toggleSeats = () => {
    this.setState(prevState => {
      return {showSeats: !prevState.showSeats}
    });
  };

  movieTimeClickHandler = (movie, time) => {
    this.setState({
      selectedMovie: movie,
      selectedTime: time
    });
    this.toggleSeats();
  };

  render() {
    return (
      <div className={classes.App}>
        <MovieList 
          movies={this.state.movies}
          timeClick={this.movieTimeClickHandler}/>
        <SeatSelection
          showSeats={this.state.showSeats}
          toggleSeats={this.toggleSeats}
          selectedTime={this.state.selectedTime}
          selectedMovie={this.state.selectedMovie}/>
      </div>
    );
  }
}

export default App;
