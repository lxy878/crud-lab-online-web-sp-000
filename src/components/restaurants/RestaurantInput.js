import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = { text: ''}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.add(this.state)
    this.setState({text: ''})
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

export default RestaurantInput;
