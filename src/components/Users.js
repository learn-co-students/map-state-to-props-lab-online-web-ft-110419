import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          Total Users: {this.props.totalUsers}
          {this.props.users.map(u => <li key={u.username}>{u.username} - {u.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    totalUsers: state.users.length
  };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
