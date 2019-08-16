import Text from "@/components/Text";
import React from "react";
import styled from "styled-components";
import connect from "react-redux/es/connect/connect";
import postService from "@/services/postService";
import {Input, Textarea} from "@/components/Control";
import Button from "@/components/Button";

const Comments = (props) => {
  const [isLoading, setLoading] = React.useState(true)
  const [comments, setComments] = React.useState(null)
  const [name, setName] = React.useState('')
  const [body, setBody] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setSubmit] = React.useState(false)

  React.useEffect(() => {
    const { post } = props
    _getComments(post.id)
  }, [])

  const _getComments = (id) => {
    return postService.getPostComments(id).subscribe({
      next: (res) => {
        setComments(res)
        setLoading(false)
      },
      error: (err) => {
        console.error(err)
        setLoading(false)
      }
    })
  }

  const _addComment = (e) => {
    e.preventDefault()

    setSubmit(true)
    setMessage('')

    const { post } = props
    const payload = { name, body, postId: post.id}
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

  const _resetCommentForm = () => {
    setName('')
    setBody('')
  }

  return (
    <Root>
      <Text variant="title-sm" bold>Comments</Text>
      {
        isLoading && <Text>Loading...</Text>
      }

      {
        !isLoading && (
          <>
            <AddComment onSubmit={(e) => _addComment(e)}>
              <Input onChange={(e) => setName(e.target.value)} placeholder="Name" required value={name} />
              <Textarea onChange={(e) => setBody(e.target.value)} placeholder="Content" required value={body} />
              <Text>{message}</Text>
              <Button disabled={isSubmitting}>Add Comment</Button>
            </AddComment>
            {
              comments.map((comm) => (
                <CommentCard key={comm.id}>
                  <Text bold>{comm.name}</Text>
                  <Text>{comm.body}</Text>
                  <Text variant="caption">by {comm.email}</Text>
                </CommentCard>
              ))
            }
          </>
        )
      }
    </Root>
  )
}

const Root = styled('div')`
  border-top: 1px solid #f8f8f8;
  padding-top: 20px;
`

const CommentCard = styled('div')`
  padding: 10px;
  & + div{
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

const mapStateToProps = (state) => ({
  post: state.post.selectedPost
})

export default connect(mapStateToProps)(Comments)
