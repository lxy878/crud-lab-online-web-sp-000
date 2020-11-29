import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviews = this.props.reviews.filter(review=> review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {reviews.map(review => <Review key={review.id} review={review} delete={this.props.delete}/>)}
      </ul>
    );
  }
};

export default Reviews;
