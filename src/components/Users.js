import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>

          <h3>Users! </h3>
          <p>Count: {this.props.userCount}</p>
          <ul>
         {this.props.users.map((u) => (<li>{u.username} - {u.hometown}</li>))}
         </ul>


      </div>
    )
  }
}

function mapStateToProps(state){
  return ({
    users: state.users,
    userCount: state.users.length
  })
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
