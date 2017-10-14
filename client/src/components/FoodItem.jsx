import React, { Component } from 'react';

class FoodItem extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="food-item">
        <p>{this.props.post.description}</p>
        <img src={this.props.post.image}/>
      </div>
    )
  }
}
export default FoodItem