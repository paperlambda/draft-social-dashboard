import React from 'react'
import postService from "@/services/postService";

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
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
      <button onClick={() => _didSubmit()}>Add</button>
    </div>
  )
}

export default AddPost
