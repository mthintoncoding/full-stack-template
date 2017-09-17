import React from 'react'
import { connect } from 'react-redux'
import BigCalendar from './calendar'
import UserView from './UserView'
import {retrieveUsers} from '../actions'
import events from '../events'

class UserGreeting extends React.Component {

  render () {
    return (
      <div>
        <h1>Hello, {this.props.username} </h1>
        {this.props.role === 'admin' ?
         <button onClick={(e) => {
              this.props.dispatch(retrieveUsers())
            }} >View Users</button> :
         <p>Unauthorized Page </p>
        }
        <BigCalendar/>
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
    username,
    role : state.clientManager.user.role
  }
};
export default connect(mapStateToProps)(UserGreeting)
