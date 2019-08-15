import React from 'react'
import {userSetSelectedAction, usersGetAction} from '@/store/actions/userActions';
import {connect} from "react-redux";
import { history } from "@/store";
import Posts from "./containers/Posts";
import {postsGetAction} from "@/store/actions/postActions";
import AddPost from "./containers/AddPost";

const Home = (props) => {
  const { isLoading, users, error } = props

  React.useEffect(() => {
    props.usersGetAction()
    props.postsGetAction()
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
      <h3>Users</h3>
      <ul>
        {
          users.map((user) => (
            <li key={user.id} >
              <a onClick={() => _didClickUser(user)} >{user.name}</a>
            </li>
          ))
        }
      </ul>

      <AddPost />

      <h3>Posts</h3>
      <Posts/>
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
  userSetSelectedAction,
  postsGetAction
})(Home)
