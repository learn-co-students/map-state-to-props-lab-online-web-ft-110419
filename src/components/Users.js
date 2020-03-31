import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <br></br>
      {this.props.numUsers}
      {this.props.users.map(user => <li>{user.username}</li>)}
    </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users : state.users, numUsers : state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
