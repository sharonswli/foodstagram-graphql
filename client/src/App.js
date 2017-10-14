import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';

import FoodList from './components/FoodList';

//@graphql(AppQuery)
//@graphql(AppMutation) 
class App extends Component {

  // Define propTypes
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      user: PropTypes.object
    })
  }
  
  render() {
    // Check if data is loading
    if(this.props.data.loading) {
      return (<div>Loading...</div>)
    }

    if(this.props.data.error) {
      console.error(this.props.data.error)
      return (<div>An unexpected error occurred. Please contact support</div>)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Foodstagram</h1>
        </header>

        <section className="user-info">
          <p>Hello {this.props.data.user.firstName}! </p>
          <img src={this.props.data.user.avatar} />          
        </section>

        <section>
          <FoodList food={this.props.data.user.posts}/>
        </section>
      </div>
    );
  }
}

const AppQuery = gql`
query AppQuery($userId: ID!) {
  user(id: $userId) {
    firstName
    avatar
    posts {
      id
      image
      description
    }
  }
}
`

const AppWithData = graphql(AppQuery, { 
  options : {
    variables: {
      userId: 1
    }
  }
})(App);
export default AppWithData;

