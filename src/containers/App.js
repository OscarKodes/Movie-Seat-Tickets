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
    selectedTime: "",
    selectedSeat: "",
    email: "",
    age: "",
    price: null
  }

  componentDidMount() {
    axios.get("http://localhost:5000/movies")
      .then(res => {
        this.setState({movies: res.data})
      })
  }

  toggleSeatsHandler = () => {
    this.setState(prevState => {
      return {
        showSeats: !prevState.showSeats,
        selectedSeat: "",
        email: "",
        age: "",
        price: null
      }
    });
  };

  movieTimeClickHandler = (movie, time) => {
    this.setState({
      selectedMovie: movie,
      selectedTime: time
    });
    this.toggleSeatsHandler();
  };

  selectSeatHandler = (seatStr) => {
    this.setState({selectedSeat: seatStr});
  }

  ageChangeHandler = (event) => {
    this.setState({age: event.target.value});
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  }

  consoleLogHandler = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className={classes.App}>
        <MovieList 
          movies={this.state.movies}
          timeClick={this.movieTimeClickHandler}/>
        <SeatSelection
          showSeats={this.state.showSeats}
          toggleSeats={this.toggleSeatsHandler}
          selectedTime={this.state.selectedTime}
          selectedMovie={this.state.selectedMovie}
          selectedSeat={this.state.selectedSeat}
          selectSeatHandler={this.selectSeatHandler}
          ageChangeHandler={this.ageChangeHandler}
          emailChangeHandler={this.emailChangeHandler}
          age={this.state.age}
          email={this.state.email}/>
        <button onClick={this.consoleLogHandler}>
          Check State
        </button>
      </div>
    );
  }
}

export default App;
