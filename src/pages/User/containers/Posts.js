import React from 'react'
import { connect } from 'react-redux'
import userService from '../../../services/userService'
import PostCard from '@/containers/PostCard'

const Posts = props => {
  const [isLoading, setLoading] = React.useState(true)
  const [posts, setPosts] = React.useState(null)

  React.useEffect(() => {
    const { user } = props
    _getPosts(user.id)
  }, [])

  const _getPosts = id => {
    setLoading(true)
    return userService.getUserPosts(id).subscribe({
      next: res => {
        setPosts(res)
        setLoading(false)
      }
    })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user.selectedUser
})

export default connect(mapStateToProps)(Posts)
