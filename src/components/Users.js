import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
import App from '../App';


class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username} | {user.hometown}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
