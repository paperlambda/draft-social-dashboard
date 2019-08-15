import React from 'react'
import {usersGetAction} from '../store/actions/userActions';
import {connect} from "react-redux";

const Home = (props) => {
  React.useEffect(() => {
    props.usersGetAction()
  }, [])

  return (
    <h1>Home</h1>
  )
}

export default connect(null, {
  usersGetAction
})(Home)
