import React, { Component } from 'react';
// import FoodItem from './FoodItem';
import { graphql, gql } from 'react-apollo';
import PropTypes from 'prop-types';


class FoodList extends Component {
  // 
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      user: PropTypes.object
    })
  }

  render() {
    if(this.props.data.loading) {
      return (<div>Loading...</div>)
    }

    if(this.props.data.error) {
      console.error(this.props.data.error)
      return (<div>An unexpected error occurred. Please contact support</div>)
    }
    return (
      <div className="food-list-container">
        <div className="food-item-container">
          <p>Hello {this.props.data.user.firstName}! </p>
        </div>
      </div>
    )
  }
}

const FoodListQuery = gql`
  query FoodList {
    user(id: 1) {
      username
      firstName
      posts {
        image
      }
    }
  }
`

const FoodListWithData = graphql(FoodListQuery)(FoodList)

export default FoodListWithData