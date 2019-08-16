import React from 'react'
import {connect} from "react-redux";
import styled from "styled-components";
import PostCard from "@/containers/PostCard";

const Posts = (props) => {
  const { posts, isLoading, error } = props

  if(isLoading){
    return (<p>Loading...</p>)
  }

  return (
    <List>
      {
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </List>
  )
}

const List = styled('div')`
  background: #ffffff;
  margin-top: 20px;
`

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading,
  error: state.post.error
})

export default connect(mapStateToProps)(Posts)
