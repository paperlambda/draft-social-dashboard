import React from 'react'
import userService from "../../services/userService";
import {connect} from "react-redux";
import {userSetSelectedAction} from "../../store/actions/userActions";
import Posts from "./containers/Posts";
import Albums from "./containers/Albums";

const User = (props) => {
  const { match, user } = props
  const [isLoading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    if(user){
      setLoading(false)
    } else {
      const { id } = match.params
      _getUser(id)
    }
  }, [])

  const _getUser = (id) => {
    setLoading(true)
    return userService.getUserDetail(id).subscribe({
      next: (res) => {
        props.userSetSelectedAction(res)
        setLoading(false)
      },
      error: (err) => {
        console.error(err)
        setError(err)
        setLoading(false)
      }
    })
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <small>{user.username}</small>
      <ul>
        <li>Phone: {user.phone}</li>
        <li>Mail: {user.email}</li>
        <li>Website: {user.website}</li>
      </ul>
      <Posts />
      <Albums/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.selectedUser
})

export default connect(mapStateToProps, {
  userSetSelectedAction
})(User)
