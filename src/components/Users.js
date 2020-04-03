import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <p>Users!</p>
        <p>User count: {this.props.users.length}</p>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={index}>{user.username}</li>
            );
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
