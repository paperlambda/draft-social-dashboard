import React from 'react'
import { connect } from 'react-redux'
import postService from '@/services/postService'
import { postSetSelectedAction } from '@/store/actions/postActions'
import styled from 'styled-components'
import { history } from '@/store'
import Comments from './containers/Comments'
import PropTypes from 'prop-types'
import {
  Flex,
  Input,
  Textarea,
  Main,
  Button,
  Container,
  Text,
  Card
} from '@/components'

const Post = props => {
  const { post, match } = props
  const [isLoading, setLoading] = React.useState(true)
  const [isEdit, setEdit] = React.useState()
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isUpdating, setUpdating] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [isDeleting, setDelete] = React.useState('')

  React.useEffect(() => {
    if (post) {
      setLoading(false)
    } else {
      const { id } = match.params
      _getPost(id)
    }
  }, [])

  const _getPost = id => {
    return postService.getPost(id).subscribe({
      next: res => {
        props.postSetSelectedAction(res)
        setLoading(false)
      },
      error: err => {
        console.error(err)
        setLoading(false)
      }
    })
  }

  const _didCancelEdit = () => {
    setEdit(false)
    _resetEditForm()
  }

  const _willUpdatePost = () => {
    const { post } = props
    setTitle(post.title)
    setContent(post.body)
    setEdit(true)
  }

  const _didUpdatePost = e => {
    e.preventDefault()
    const { post } = props
    const payload = { title, body: content, postId: post.id }
    setUpdating(true)
    return postService.updatePost(payload).subscribe({
      next: () => {
        setMessage('Comment updated!')
        setUpdating(false)
        setTimeout(() => {
          setEdit(false)
        }, 1000)
      },
      error: err => {
        console.error(err)
        setMessage('Failed to update comment')
        setUpdating(false)
      }
    })
  }

  const _willDelete = () => {
    const { post } = props
    setDelete(true)
    return postService.deletePost(post.id).subscribe({
      next: () => {
        setTimeout(() => {
          setDelete(false)
          history.goBack()
        })
      },
      error: err => {
        console.error(err)
        setDelete(false)
      }
    })
  }

  const _resetEditForm = () => {
    setTitle('')
    setContent('')
    setMessage('')
  }

  const _willGoBack = () => {
    history.goBack()
  }

  return (
    <Main>
      <Container>
        <Button onClick={() => _willGoBack()} color="secondary">
          Back
        </Button>
        <Root>
          {isLoading && <Text>Loading...</Text>}
          {!isLoading && (
            <>
              {isEdit ? (
                <form onSubmit={e => _didUpdatePost(e)}>
                  <Input
                    placeholder="Title..."
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                  />
                  <Textarea
                    placeholder="Content..."
                    required
                    value={content}
                    onChange={e => setContent(e.target.value)}
                  />
                  <Text>{message}</Text>
                  <Button type="submit" disabled={isUpdating}>
                    Update
                  </Button>
                  <Button
                    type="button"
                    color="secondary"
                    onClick={() => _didCancelEdit()}
                    disabled={isUpdating}
                  >
                    Cancel
                  </Button>
                </form>
              ) : (
                <div>
                  <Text variant="title" bold>
                    {post.title}
                  </Text>
                  <Text>{post.body}</Text>
                  <Toolbar jc="flex-start">
                    <Button onClick={() => _willUpdatePost()}>Edit</Button>
                    <Button onClick={() => _willDelete()} color="inverted">
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </Button>
                  </Toolbar>
                </div>
              )}
              <Comments />
            </>
          )}
        </Root>
      </Container>
    </Main>
  )
}

const Root = styled(Card)`
  padding: 15px 20px;
  margin-top: 20px;
  > div:first-child {
    margin-bottom: 30px;
  }
`

const Toolbar = styled(Flex)`
  margin-top: 20px;
`

Post.propTypes = {
  post: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.object
  }),
  postSetSelectedAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  post: state.post.selectedPost
})

export default connect(
  mapStateToProps,
  {
    postSetSelectedAction
  }
)(Post)
