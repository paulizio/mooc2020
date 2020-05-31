import React, { useState, useEffect,useLayoutEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState(null)
  const [errorMessage,setErrorMessage]=useState(null)
  const [errorName,setErrorName]=useState(null)

  const blogFormRef=React.createRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useLayoutEffect(() => {
    const loggedUserJSON=window.localStorage.getItem('loggedUser')
    if(loggedUserJSON){
      const user=JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])
  const handleLogin=async(event) => {
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

      setTimeout(() => {
        setErrorMessage(null)
        setErrorName(null)
      },5000)
    }

  }
  const loginForm=() => (
    <form onSubmit={handleLogin}>
      <div>
      username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
    password
        <input
          type="text"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>

    </form>
  )
  const showBlogs=() => {
    return blogs.map(blog =>
      <Blog key={blog.id} blog={blog} buttonLabel="view" />
    )
  }
  const blogForm=() => (
    <Togglable buttonLabel='new blog' ref={blogFormRef}>
      <BlogForm createBlog={addBlog}/>
    </Togglable>
  )
  const handleLogOut=(event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }
  const addBlog=(blogObject) => {
    try{
      blogFormRef.current.toggleVisibility()
      blogService
        .create(blogObject)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          setErrorMessage(`a new blog ${returnedBlog.title} by ${returnedBlog.author} added`)
          setErrorName('success')
          setTimeout(() => {
            setErrorMessage(null)
            setErrorName(null)
          },5000)
        })
    }catch(exception){
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
          {showBlogs()}
        </div>:
        loginForm()
      }


    </div>


  )
}

export default App