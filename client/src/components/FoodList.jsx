import React, { Component } from 'react';
import FoodItem from './FoodItem';
import NewFoodItem from './NewFoodItem';

class FoodList extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <div className="food-list-container">
        <NewFoodItem userId={this.props.user.id}/>
        <section className="food-item-container">
          { this.props.food.map(post => <FoodItem key={post.id} post={post}/>)}
        </section>
      </div>
    )
  }
}

export default FoodList