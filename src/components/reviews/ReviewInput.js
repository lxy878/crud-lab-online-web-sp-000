import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {restaurantId: '', text: ''}

  handleChange = e =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const view = {...this.state, restaurantId: this.props.restaurantId}
    this.props.add(view)
    this.setState({...this.state, text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='text' id='text' onChange={this.handleChange} value={this.state.text}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
