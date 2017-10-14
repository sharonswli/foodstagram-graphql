import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql, gql } from 'react-apollo';
import FoodList from './components/FoodList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <FoodList/>
      </div>
    );
  }
}
export default App;

// export default graphql(AppQuery)(App);
