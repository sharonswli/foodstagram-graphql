import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';
import { AppQuery } from '../App';

class NewFoodItem extends Component {
  
  addNewFood() {
    return this.props.createNewFood({
      description: 'new new post',
      image: `http://fillmurray.com/200/300`,
      userId: this.props.userId
    })
  }

  render() {
    return(
      <section className="new-food-container">
        <form>
          <label className="new-food-form-label">Image:</label>
          <input type="text"></input>

          <label className="new-food-form-label">Description: </label>
          <textarea></textarea>
        </form>
        <button className="add-food-item-btn" onClick={this.addNewFood.bind(this)}>Add Food Item</button>
      </section>
    )
  }
}

const createNewFoodPost = gql`
  mutation createNewFoodPost($description: String, $image: String, $userId: Int) {
    createNewFoodPost(description: $description, image: $image, userId: $userId) {
      id
      description
      image
    }
  }
`;


const NewFoodItemWithData = graphql(createNewFoodPost, {
  props: ({ mutate }) => ({
    // Inject mutation function into the component's props: keep the concern of formatting the mutation options out of your presentation component
    createNewFood({ description, image, userId }) { 
      console.log("Creating new food now...")
      return mutate({ 
        variables: { description, image, userId },
        // Update cache: apollo doesn't know the mutation has anything to do with the original query that renders out list
        update: (store, { data: { createNewFoodPost }}) => {
          // Read original query
          const data = store.readQuery({ query: AppQuery, variables: { userId: 1 } });

          // Add server response new item into appropriate place in cache
          data.user.posts.push(createNewFoodPost)
          console.log("Cache updated: ", data);
          store.writeQuery({
            query: AppQuery, 
            data
          })
        }
      })
    }
  })
})(NewFoodItem)

export default NewFoodItemWithData