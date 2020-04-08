import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  renderUsers() {
    return this.props.users.map(user => 
      <li>
        <h1>{user.username}</h1>
        <h3>{user.hometown}</h3>
      </li>
    )
  }

  render() {
    // debugger
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  // debugger
  return {users:  state.users}
}

export default connect(mapStateToProps)(Users);

