import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';

// @graphql(FoodListQuery)
// @graphql(FoodListMutation)
class FoodList extends Component {
  
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
      <div className="food-list-container">
        <div className="user-info">
          <p>Hello {this.props.data.user.firstName}! </p>
          <img src={this.props.data.user.avatar} />          
        </div>
        <div className="food-item-container">
          { this.props.data.user.posts.map(post => <FoodItem key={post.id} post={post}/>)}
        </div>
      </div>
    )
  }
}

const FoodListQuery = gql`
  query FoodList {
    user(id: 1) {
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

const FoodListWithData = graphql(FoodListQuery)(FoodList)

export default FoodListWithData