import React from 'react'
import { createBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import { addSuccessNotification } from '../reducers/notificationReducer'
import Togglable from './Togglable'
const BlogForm=() => {
  const dispatch=useDispatch()

  const blogFormRef=React.createRef()
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
    dispatch(addSuccessNotification(`Added new blog "${content.title}" by ${content.author}`,5000))
    event.target.title.value=''
    event.target.author.value=''
    event.target.url.value=''

  }

  return(
    <Togglable buttonLabel='new blog' ref={blogFormRef}>
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
    </Togglable>
  )
}

export default BlogForm