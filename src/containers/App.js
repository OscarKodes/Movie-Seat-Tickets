import React, {Component} from 'react';
import classes from "./App.module.css";
import MovieList from "../components/MovieList/MovieList";

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className={classes.App}>
        <MovieList/>
      </div>
    );
  }
}

export default App;
