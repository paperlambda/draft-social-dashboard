import React from 'react'
import {connect} from "react-redux";

const Posts = (props) => {
  const { posts, isLoading, error } = props

  if(isLoading){
    return (<p>Loading...</p>)
  }

  return (
    <ul>
      {
        posts.map((post) => (<li>{post.title}</li>))
      }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading,
  error: state.post.error
})

export default connect(mapStateToProps)(Posts)
