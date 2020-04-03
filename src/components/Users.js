import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          <div>
            <ul>{this.props.users.map(user => <li>{user.username}</li>)}</ul>
          </div>
          <div>
          <ul>{this.props.users.length}</ul>
          </div>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {return {users: state.users}}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
