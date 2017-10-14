import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';

class FoodList extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <div className="food-list-container">
        <div className="food-item-container">
          { this.props.food.map(post => <FoodItem key={post.id} post={post}/>)}
        </div>
      </div>
    )
  }
}
export default FoodList
