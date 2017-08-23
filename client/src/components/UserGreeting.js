import React from 'react'
import { connect } from 'react-redux'

class UserGreeting extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello, {this.props.username} </h1>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    let username = '';
    if(state.clientManager.user.username){
      username = state.clientManager.user.username
    }
  return {
    username
  }
};
export default connect(mapStateToProps)(UserGreeting)
