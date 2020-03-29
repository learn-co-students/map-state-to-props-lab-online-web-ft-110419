import React, { Component } from "react";
// add any needed imports here
import { connect } from "react-redux";

class Users extends Component {
  usersList = users => users.map((user, i) => <li key={i}>{user.username}</li>);

  render() {
    let users = this.props.users;
    let count = this.props.userCount;
    return (
      <div>
        <ul>
          Users! {count !== 0 ? count : ""}
          {this.usersList(users)}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = ({ users }) => {
  return {
    users,
    userCount: users.length
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
