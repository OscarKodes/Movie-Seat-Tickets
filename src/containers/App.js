import React, {Component} from "react";
import axios from "axios";
import classes from "./App.module.css";
import MovieList from "../components/MovieList/MovieList";
import SeatSelection from "../components/SeatSelection/SeatSelection";
import TicketsSold from "../components/TicketsSold/TicketsSold";

class App extends Component {

  state = {
    movies: [],
    showSeats: false,
    showTicketsSold: false,
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
        age: ""
      }
    });
  };

  toggleTicketsSoldHandler = (movie) => {
    this.setState(prevState => {
      return {
        showTicketsSold: !prevState.showTicketsSold,
        selectedMovie: movie
      }
    });
  }

  selectMovieHandler = (movie) => {
    this.setState({
      selectedMovie: movie
    });
  };

  movieTimeClickHandler = (movie, time) => {
    this.setState({
      selectedMovie: movie,
      selectedTime: time
    });
    this.toggleSeatsHandler();
  };

  ageChangeHandler = (event) => {
    this.setState({age: event.target.value});
  }

  emailChangeHandler = (event) => {
    this.setState({email: event.target.value});
  }

  purchaseHandler = (ticketPrice) => {
    const ticketOrder = {
      ticket: {
        showDate: "January 1st, 3030",
        showTime: this.state.selectedTime,
        age: this.state.age,
        cost: ticketPrice,
        email: this.state.email
      }
    }

    axios.post("http://localhost:5000/movies/" + this.state.selectedMovie._id + "/tickets", ticketOrder)
      .then(res => console.log(res.data));

    this.toggleSeatsHandler();

    // Work on list of ticket orders - make similar to seatSelection
    alert("Ordered List Opens Here");
  }

  consoleLogHandler = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className={classes.App}>
        <MovieList 
          movies={this.state.movies}
          timeClick={this.movieTimeClickHandler}
          toggleTicketsSold={this.toggleTicketsSoldHandler}/>
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
          email={this.state.email}
          purchase={this.purchaseHandler}/>
        <TicketsSold 
          showTicketsSold={this.state.showTicketsSold}
          toggleTicketsSold={this.toggleTicketsSoldHandler}
          selectedMovie={this.state.selectedMovie} />
        <button onClick={this.consoleLogHandler}>
          Check State
        </button>
      </div>
    );
  }
}

export default App;
