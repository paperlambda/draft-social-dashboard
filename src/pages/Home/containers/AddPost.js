import React from 'react'
import postService from "@/services/postService";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {Input, Textarea} from "@/components/Control";
import styled from "styled-components";
import Flex from "@/components/Flex";

const AddPost = () => {
  const [title, setTitle] = React.useState()
  const [content, setContent] = React.useState()

  const _didSubmit = () => {
    const payload = { title, body: content }
    return postService.addPost(payload).subscribe({
      next: (e) => {
        console.log(e)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  return (
    <FormAdd>
      <form onSubmit={() => _didSubmit()}>
        <Input placeholder="Title..." required value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
        <Textarea placeholder="Content..." required value={content} onChange={(e) => setContent(e.target.value)}/>
        <Flex jc="flex-end">
          <Button>Add Post</Button>
        </Flex>
      </form>
    </FormAdd>
  )
}

const FormAdd = styled(Card)`
  padding: 15px;
  margin-top: 10px;
  > form {
    margin-bottom: 0px;
  }
`

export default AddPost
