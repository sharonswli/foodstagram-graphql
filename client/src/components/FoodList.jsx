import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';

class FoodList extends Component {
  
  constructor(props) {
    super(props)
  }

  addNewFood() {
    this.props.mutate({
      variables: {

      }
    })
  }

  render() {    
    return (
      <div className="food-list-container">
        <section className="new-food-container">
          <form onSubmit={this.handleSubmit}>
            <label className="new-food-form-label">Image:</label>
            <input></input>

            <label className="new-food-form-label">Description: </label>
            <textarea></textarea>
          </form>
          <button className="add-food-item-btn" onClick={this.addNewFood.bind(this)}>Add Food Item</button>
        </section>
        <section className="food-item-container">
          { this.props.food.map(post => <FoodItem key={post.id} post={post}/>)}
        </section>
      </div>
    )
  }
}

const addNewFood = gql`
  mutation addNewFood($description: String, $image: String) {
    createNewFoodPost(description: $description, image: $image) {
      createdAt
    }
  }
`
const FoodListWithData = graphql(addNewFood)(FoodList)
export default FoodListWithData
