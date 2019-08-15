import React from 'react'
import {connect} from "react-redux";
import userService from "../../../services/userService";

const Posts = (props) => {
  const [isLoading, setLoading] = React.useState(true)
  const [posts, setPosts] = React.useState(null)

  React.useEffect(() => {
    const { user } = props
    _getPosts(user.id)
  }, [])

  const _getPosts = (id) => {
    setLoading(true)
    return userService.getUserPosts(id).subscribe({
      next: (res) => {
        setPosts(res)
        setLoading(false)
      }
    })
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h4>Posts</h4>
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.selectedUser
})

export default connect(mapStateToProps)(Posts)
