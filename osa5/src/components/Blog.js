import React,{ useState,useImperativeHandle } from 'react'
import { likeBlog,removeBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
const Blog=React.forwardRef((props,ref) => {
  const [visible,setVisible]=useState(false)
  const dispatch=useDispatch()
  const hidenWhenVisible={
    display:visible?'none':'',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5 }
  const showWhenVisible={
    display:visible?'':'none',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5 }

  const toggleVisibility=() => {
    setVisible(!visible)
  }
  useImperativeHandle(ref,() => {
    return{
      toggleVisibility
    }
  })
  const handleLike=blog => {
    dispatch(likeBlog(blog))

  }
  const handleDelete=id => {
    dispatch(removeBlog(id))
  }

  return(
    <div>
      <div style={hidenWhenVisible} className="hideInfo">
        {props.blog.title} {props.blog.author} <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="showAllInfo">
        {props.blog.title} {props.blog.author} <button onClick={toggleVisibility}>hide</button>
        <br/>
        {props.blog.url}
        <br/>
        {props.blog.likes} <button onClick={() => handleLike(props.blog)}>like</button> <button onClick={() => handleDelete(props.blog.id)}>delete</button>
      </div>

    </div>
  )
})

Blog.displayName='Blog'

export default Blog
