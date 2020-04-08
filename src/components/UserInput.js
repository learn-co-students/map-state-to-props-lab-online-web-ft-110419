import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}


// By connecting to the Redux Store, we have acess to the dispatch method.
// The dispathc() function is a key in the Store object.
export default connect()(UserInput);
