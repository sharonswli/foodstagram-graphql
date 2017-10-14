import React, { Component } from 'react';
import moment from 'moment'

class FoodItem extends Component {
  render() {
    return (
      <div className="food-item">
        <p className="food-item-descripition">{this.props.post.description}</p>
        <img src={this.props.post.image} width="640" height="480"/>
      </div>
    )
  }
}
export default FoodItem