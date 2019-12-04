import React, {Component} from "react";
import axios from "axios";
import classes from "./App.module.css";
import MovieList from "../components/MovieList/MovieList";
import SeatSelection from "../components/SeatSelection/SeatSelection";
import TicketsSold from "../components/TicketsSold/TicketsSold";
import About from "../components/About/About";

class App extends Component {

  state = {
    movies: [],
    showSeats: false,
    showTicketsSold: false,
    showAbout: false,
    editTicketId: null,
    editTicketSeat: null,
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
        editTicketId: prevState.showSeats ? null : this.state.editTicketId,
        editTicketSeat: prevState.showSeats ? null : this.state.editTicketSeat
      }
    });

    window.scrollTo(0, 0);
  };

  toggleTicketsSoldHandler = (movie) => {
    this.setState(prevState => {
      return {
        showTicketsSold: !prevState.showTicketsSold,
        selectedMovie: movie
      }
    });

    window.scrollTo(0, 0);
  }

  toggleAbout = () => {
    this.setState(prevState => {
      return {showAbout: !prevState.showAbout}
    });
  }

  selectSeatHandler = (seatStr) => {
    this.setState({
      selectedSeat: seatStr
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

  editButtonHandler = (ticket) => {
    this.setState({
      editTicketId: ticket._id,
      editTicketSeat: ticket.selectedSeat,
      showTicketsSold: false,
      showSeats: true,
      selectedTime: ticket.showTime,
      selectedSeat: ticket.selectedSeat,
      age: ticket.age,
      email: ticket.email
    });

    window.scrollTo(0, 0);
  }

  purchaseHandler = (ticketPrice) => {
    const ticketOrder = {
      ticket: {
        showDate: "January 1st, 3030",
        showTime: this.state.selectedTime,
        selectedSeat: this.state.selectedSeat,
        age: this.state.age,
        cost: ticketPrice,
        email: this.state.email
      }
    }

    if (this.state.editTicketId) {
      axios.put("http://localhost:5000/movies/" + this.state.selectedMovie._id + "/tickets/" + this.state.editTicketId, ticketOrder)
      .then(res => {
        const movieIdx = this.state.movies.indexOf(this.state.selectedMovie);
        const updatedMovies = [...this.state.movies];
        updatedMovies[movieIdx] = res.data;
        this.setState({
          movies: updatedMovies,
          selectedMovie: res.data,
          editTicketId: null,
        });
        console.log("Updated ticket order!");
      });
    } else {
      axios.post("http://localhost:5000/movies/" + this.state.selectedMovie._id + "/tickets", ticketOrder)
      .then(res => {
        const movieIdx = this.state.movies.indexOf(this.state.selectedMovie);
        const updatedMovies = [...this.state.movies];
        updatedMovies[movieIdx] = res.data;
        this.setState({
          movies: updatedMovies,
          selectedMovie: res.data
        });
        console.log("Ticket purchased!");
      });
    }

    this.toggleSeatsHandler();
    this.toggleTicketsSoldHandler(this.state.selectedMovie);
  }

  deleteOrderHandler = (ticketId) => {
    
    axios.delete("http://localhost:5000/movies/" + this.state.selectedMovie._id + "/tickets/" + ticketId)
      .then(res => console.log(res.data));
    const updatedOrders = this.state.selectedMovie.orders.filter(order => order._id !== ticketId);
    const updatedSelectedMovie = {
      ...this.state.selectedMovie,
      orders: updatedOrders
    };
    const selectedMovieIdx = this.state.movies.indexOf(this.state.selectedMovie);
    const updatedMovies = [...this.state.movies];
    updatedMovies[selectedMovieIdx] = updatedSelectedMovie;
    this.setState({
      selectedMovie: updatedSelectedMovie,
      movies: updatedMovies
    });
  }

  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.Heading}>Movie Seat Reservations</h1>
        <p 
          className={classes.AboutBtn}
          onClick={this.toggleAbout}>About</p>
        <About
          showAbout={this.state.showAbout}
          toggleAbout={this.toggleAbout}/>
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
          purchase={this.purchaseHandler}
          editTicketSeat={this.state.editTicketSeat}/>
        <TicketsSold 
          showTicketsSold={this.state.showTicketsSold}
          toggleTicketsSold={this.toggleTicketsSoldHandler}
          selectedMovie={this.state.selectedMovie}
          deleteOrder={this.deleteOrderHandler}
          editButton={this.editButtonHandler} />
      </div>
    );
  }
}

export default App;
