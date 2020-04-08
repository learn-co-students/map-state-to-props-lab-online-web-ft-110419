import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {
  render() {
    const users = this.props.users.map((user, i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
// export default Users
