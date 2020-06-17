import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'
const BlogList=(props) => {
  const blogs=useSelector(state => state.blogs)
  return(
    <div>
      {props.user?
        blogs.map(blog =>
          <Blog key={blog.id} blog={blog} buttonLabel="view" />
        ):null}
    </div>
  )}

export default BlogList