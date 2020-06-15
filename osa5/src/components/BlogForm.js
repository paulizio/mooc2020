import React from 'react'
import { createBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
const BlogForm=() => {
  const dispatch=useDispatch()

  const addBlog=(event) => {
    event.preventDefault()
    const content={
      title:event.target.title.value,
      author:event.target.author.value,
      url:event.target.url.value,
      likes:0
    }
    console.log('content is:',content)
    dispatch(createBlog(content))
    event.target.title.value=''
    event.target.author.value=''
    event.target.url.value=''

  }

  return(
    <div>
      <h2>Add new blog</h2>

      <form
        onSubmit={addBlog}>
                title
        <input
          name="title"
          id="title"
        />
        <br/>
                author
        <input
          name="author"
          id="author"
        />
        <br/>
                url
        <input
          name="id"
          id="url"
        />
        <br/>
        <button id="savebutton" type="submit">save</button>
      </form>
    </div>
  )
}

export default BlogForm