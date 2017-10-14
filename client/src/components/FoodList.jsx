import React, { Component } from 'react';
import FoodItem from './FoodItem';
import NewFoodItem from './NewFoodItem';

class FoodList extends Component {
  
  foodList

  render() {
    this.foodList = this.props.food.slice().reverse()
    return (
      <div className="food-list-container">
        <NewFoodItem userId={this.props.user.id}/>
        <section className="food-item-container">
          { this.foodList.map(post => <FoodItem key={post.id} post={post}/>)}
        </section>
      </div>
    )
  }
}

export default FoodList