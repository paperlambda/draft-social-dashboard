import React from 'react'
import {connect} from "react-redux";
import styled from "styled-components";
import Text from "@/components/Text";

const Posts = (props) => {
  const { posts, isLoading, error } = props

  if(isLoading){
    return (<p>Loading...</p>)
  }

  return (
    <List>
      {
        posts.map((post) => (
          <PostCard>
            <Text variant="title-sm" bold>{post.title}</Text>
            <Text color="#888888">{post.body}</Text>
            <Text variant="caption">created by {post.userId}</Text>
          </PostCard>
        ))
      }
    </List>
  )
}

const List = styled('div')`
  background: #ffffff;
  margin-top: 20px;
`

const PostCard = styled('div')`
  padding: 15px 20px;
  
  > div{
    margin-bottom: 8px;
    &:first-child{
      text-transform: capitalize;
    }
  }
  
  & + div {
    border-top: 1px solid #f8f8f8;
  }
`

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading,
  error: state.post.error
})

export default connect(mapStateToProps)(Posts)
