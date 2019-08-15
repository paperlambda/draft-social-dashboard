import React from 'react'
import {connect} from "react-redux";
import userService from "../../../services/userService";
import styled from "styled-components";
import Text from "@/components/Text";

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
      {
        posts.map((post) => (
          <PostCard key={post.id}>
            <Text variant="title-sm" bold>{post.title}</Text>
            <Text color="#888888">{post.body}</Text>
          </PostCard>
        ))
      }
    </>
  )
}

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
  user: state.user.selectedUser
})

export default connect(mapStateToProps)(Posts)
