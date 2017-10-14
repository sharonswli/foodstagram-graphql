import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';

import FoodList from './components/FoodList';

//@graphql(AppQuery)
//@graphql(AppMutation) 
class App extends Component {

  render() {
    // Check if data is loading
    if(this.props.data.loading) {
      return (<div>Loading...</div>)
    }

    if(this.props.data.error || !this.props.data.user) {
      console.error(this.props.data.error)
      return (<div>An unexpected error occurred. Please contact support</div>)
    }

    const currentUser = this.props.data.user;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Foodstagram</h1>
        </header>

        <section className="user-info">
          <p>Hello {currentUser.firstName}! </p>
          <img src={currentUser.avatar} />          
        </section>
      
        <section className="user-food">
          <FoodList food={currentUser.posts} user={currentUser}/>
        </section>
      </div>
    );
  }
}

export const AppQuery = gql`
query AppQuery($userId: ID!) {
  user(id: $userId) {
    id
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
App.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    user: PropTypes.object
  })
}

const AppWithData = graphql(AppQuery, { 
  options : {
    variables: {
      userId: 1
    }
  }
})(App);
export default AppWithData;

