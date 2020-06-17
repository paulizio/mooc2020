import React from 'react'
import { addErrorNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
const LoginForm=(props) => {
  const dispatch=useDispatch()
  const handleLogin=async(event) => {
    event.preventDefault()
    try{
      const credentials={
        username:event.target.username.value,
        password:event.target.password.value }
      dispatch(loginUser(credentials))
      console.log('user is',props.user)
      event.target.username.value=''
      event.target.password.value=''

    }catch (error){
      console.log('error',error)
      dispatch(addErrorNotification('Invalid username or password',5000))
    }}
  return(
    <Form onSubmit={handleLogin}>
      <div>
        <Form.Label for="inputPassword5">Username</Form.Label>
        <input
          id='username'
          name="username"
        />
      </div>
      <div>
        <Form.Label for="inputPassword5">Password</Form.Label>
        <input
          id='password'
          name="password"
        />
      </div>
      <div>
        <Button size="sm" variant="primary" id='login-button' type="submit">login</Button>
      </div>
    </Form>
  )
}
export default LoginForm