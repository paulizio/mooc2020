import React, { useState, useEffect,useLayoutEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState(null)
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [url,setUrl]=useState('')
  const [errorMessage,setErrorMessage]=useState(null)
  const [errorName,setErrorName]=useState(null)
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
      )  
    }, [])
    
    useLayoutEffect(()=>{
      const loggedUserJSON=window.localStorage.getItem('loggedUser')
      if(loggedUserJSON){
        const user=JSON.parse(loggedUserJSON)
        setUser(user)
        blogService.setToken(user.token)
      }
    },[])
  const handleLogin=async(event)=>{
    event.preventDefault()

    try{
      const user=await loginService.login({
        username,password,
      })
      window.localStorage.setItem(
        'loggedUser',JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }catch (exception){
     setErrorMessage('Invalid username or password')
     setErrorName('error')

      setTimeout(()=>{
        setErrorMessage(null)
        setErrorName(null)
      },5000)
    }
    
  }
const loginForm=()=>(
  <form onSubmit={handleLogin}>
    <div>
      username
      <input 
      type="text"
      value={username}
      name="Username"
      onChange={({target})=>setUsername(target.value)}
      />
    </div>
    <div>
    password
    <input
    type="text"
    value={password}
    name="Password"
    onChange={({target})=>setPassword(target.value)}
    />
    </div>
    <button type="submit">login</button>

  </form>
)

const blogForm=()=>(
  <div>
    <form>
      <div>
        title:
      <input
       type="text"
       value={title}
       name="title:"
       onChange={({target})=>setTitle(target.value)}
      />
      </div>
      <div>
        author:
      <input
       type="text"
       value={author}
       name="author:"
       onChange={({target})=>setAuthor(target.value)}
       />
       </div>
   
       <div>
         url:
      <input
        type="text"
       value={url}
       name="url:"
       onChange={({target})=>setUrl(target.value)}
       />
       </div>
       <button type="submit" onClick={newBlog}>create</button>
    </form>
  {blogs.map(blog =>
    <Blog key={blog.id} blog={blog} />
  )}
  </div>
)
const handleLogOut=(event)=>{
  event.preventDefault()
  window.localStorage.removeItem('loggedUser')
  setUser(null)
}
const newBlog=(event)=>{
  event.preventDefault()
  const blogObject={
    title:title,
    author:author,
    url:url,
  }
  try{
  blogService.create(blogObject)
  .then(returnedBlog=>{
    setBlogs(blogs.concat(returnedBlog))
    setTitle('')
    setAuthor('')
    setUrl('')
    setErrorMessage(`a new blog ${returnedBlog.title} by ${returnedBlog.author} added`)
    setErrorName('success')
    setTimeout(()=>{
      setErrorMessage(null)
      setErrorName(null)
    },5000)
  })}
catch(exception){
  setErrorMessage('Adding new blog failed')
}
}


  return (
    <div>
<Notification message={errorMessage} className={errorName}/>
     {user?
     <div>
     <h2>blogs</h2>
  <p>{user.name} logged in <button onClick={handleLogOut}>logout</button></p>
  {blogForm()}
  </div>:
     loginForm()   
    }
    </div>
    
     
  )
}

export default App