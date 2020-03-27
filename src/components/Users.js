import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderList = () => {
    if (this.props.users.length > 0) {
      return (
        <div>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderList()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		users: state.users
	};
};


export default connect(mapStateToProps)(Users)
