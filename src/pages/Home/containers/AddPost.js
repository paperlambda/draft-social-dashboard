import React from 'react'
import postService from '@/services/postService'
import styled from 'styled-components'
import { Text, Flex, Button, Card, Input, Textarea } from '@/components'

const AddPost = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isLoading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const _didSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const payload = { title, body: content }

    return postService.addPost(payload).subscribe({
      next: () => {
        setMessage('New Post Added!')
        setLoading(false)
        _resetForm()
      },
      error: () => {
        setMessage('Failed to add new post')
        setLoading(false)
      }
    })
  }

  const _resetForm = () => {
    setTitle('')
    setContent('')
  }

  return (
    <FormAdd>
      <form onSubmit={e => _didSubmit(e)}>
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
        <Flex jc="flex-end">
          <Button disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Post'}
          </Button>
        </Flex>
      </form>
    </FormAdd>
  )
}

const FormAdd = styled(Card)`
  padding: 15px;
  margin-top: 40px;
  margin-bottom: 20px;
  > form {
    margin-bottom: 0px;
  }
`

export default AddPost
