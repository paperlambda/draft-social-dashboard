import React from 'react'
import {userSetSelectedAction, usersGetAction} from '../store/actions/userActions';
import {connect} from "react-redux";
import { history } from "../store";

const Home = (props) => {
  const { isLoading, users, error } = props

  React.useEffect(() => {
    props.usersGetAction()
  }, [])

  const _didClickUser = (user) => {
    props.userSetSelectedAction(user)
    history.push(`/users/${user.id}`)
  }

  if(isLoading) {
    return (<p>Loading...</p>)
  }

  return (
    <div>
      <h3>Friends</h3>
      <ul>
        {
          users.map((user) => (
            <li key={user.id} >
              <a onClick={() => _didClickUser(user)} >{user.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
  users: state.user.users,
  error: state.user.error
})

export default connect(mapStateToProps, {
  usersGetAction,
  userSetSelectedAction
})(Home)
