import React,{ useState,useImperativeHandle } from 'react'

const Blog=React.forwardRef((props,ref) => {
  const [visible,setVisible]=useState(false)

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
  return(
    <div>
      <div style={hidenWhenVisible}>
        {props.blog.title} {props.blog.author} <button onClick={toggleVisibility}>view</button>
      </div>
      <div style={showWhenVisible}>
        {props.blog.title} {props.blog.author} <button onClick={toggleVisibility}>hide</button>
        <br/>
        {props.blog.url}
        <br/>
        {props.blog.likes} <button>like</button>
      </div>

    </div>
  )
})

Blog.displayName='Blog'

export default Blog
