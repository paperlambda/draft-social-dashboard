import React from 'react'
import styled from 'styled-components'
import connect from 'react-redux/es/connect/connect'
import postService from '@/services/postService'
import PropTypes from 'prop-types'
import { Flex, Button, Input, Text, Textarea } from '@/components'

const Comments = props => {
  const [isLoading, setLoading] = React.useState(true)
  const [comments, setComments] = React.useState(null)
  const [name, setName] = React.useState('')
  const [body, setBody] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setSubmit] = React.useState(false)
  const [isEdit, setEdit] = React.useState(null)

  React.useEffect(() => {
    const { post } = props
    _getComments(post.id)
  }, [])

  const _getComments = id => {
    return postService.getPostComments(id).subscribe({
      next: res => {
        setComments(res)
        setLoading(false)
      },
      error: err => {
        console.error(err)
        setLoading(false)
      }
    })
  }

  const _didSubmit = e => {
    e.preventDefault()
    if (isEdit) {
      _updateComment(isEdit)
    } else {
      _addComment()
    }
  }

  const _addComment = () => {
    setSubmit(true)
    setMessage('')

    const { post } = props
    const payload = { name, body, postId: post.id }
    return postService.addComment(payload).subscribe({
      next: () => {
        setMessage('New comment added!')
        setSubmit(false)
        _resetCommentForm()
      },
      error: () => {
        setMessage('Failed to add comment')
        setSubmit(false)
      }
    })
  }

  const _updateComment = id => {
    setSubmit(true)
    setMessage('')

    const payload = { name, body, id }
    return postService.updateComment(payload).subscribe({
      next: () => {
        setMessage('Comment updated!')
        setSubmit(false)
        _resetCommentForm()
      },
      error: () => {
        setMessage('Failed to update comment')
        setSubmit(false)
      }
    })
  }

  const _willDeleteComment = comment => {
    return postService.deleteComment(comment.id).subscribe({
      next: () => {
        const filterDeleted = comments.filter(c => c.id !== comment.id)
        setComments(filterDeleted)
      },
      error: err => {
        console.error(err)
      }
    })
  }

  const _willEditComment = comment => {
    const { name, body, id } = comment
    setName(name)
    setBody(body)
    setMessage('')
    setEdit(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const _resetCommentForm = () => {
    setName('')
    setBody('')
    setEdit(false)
  }

  return (
    <Root>
      <Text variant="title-sm" bold>
        Comments
      </Text>
      {isLoading && <Text>Loading...</Text>}

      {!isLoading && (
        <>
          <AddComment id="form-edit" onSubmit={e => _didSubmit(e)}>
            <Input
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              required
              value={name}
            />
            <Textarea
              onChange={e => setBody(e.target.value)}
              placeholder="Content"
              required
              value={body}
            />
            <Text>{message}</Text>
            {isEdit ? (
              <Flex jc="flex-start">
                <Button type="submit" disabled={isSubmitting}>
                  Update Comment
                </Button>
                <Button
                  onClick={() => _resetCommentForm()}
                  type="button"
                  color="secondary"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </Flex>
            ) : (
              <Button disabled={isSubmitting}>Add Comment</Button>
            )}
          </AddComment>
          {comments.map(comm => (
            <CommentCard key={comm.id}>
              <Text bold>{comm.name}</Text>
              <Text>{comm.body}</Text>
              <Text variant="caption">by {comm.email}</Text>
              <Toolbar jc="flex-start">
                <Button onClick={() => _willEditComment(comm)}>Edit</Button>
                <Button
                  onClick={() => _willDeleteComment(comm)}
                  color="inverted"
                >
                  Delete
                </Button>
              </Toolbar>
            </CommentCard>
          ))}
        </>
      )}
    </Root>
  )
}

const Root = styled('div')`
  border-top: 1px solid #f8f8f8;
  padding-top: 20px;
`

const CommentCard = styled('div')`
  padding: 10px;
  & + div {
    border-top: 1px solid #f8f8f8;
  }
  > div {
    margin-bottom: 8px;
  }
`

const AddComment = styled('form')`
  padding: 15px;
  background: #f1f1f1;
  border-radius: 8px;
`

const Toolbar = styled(Flex)`
  margin-top: 20px;
`

Comments.propTypes = {
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post.selectedPost
})

export default connect(mapStateToProps)(Comments)
