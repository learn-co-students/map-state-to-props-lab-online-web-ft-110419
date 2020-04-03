import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */
          this.props.users.map(user =>{
          return(<li>{user.username}</li>)
          })}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users}
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users);
