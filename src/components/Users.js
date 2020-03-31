import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  
  renderUsers() {
    return this.props.users.map(user => 
      <li>
        <p>{user.username}</p>
        <p>{user.hometown}</p>
      </li>
    )
  }
  
  render() {
    const {userCount} = this.props
    return (
      <div>
        <ul>
          Users!
          <br />
          {this.renderUsers()}
          {userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
