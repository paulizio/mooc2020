import React from 'react'
import { logOutUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import  Nav from 'react-bootstrap/Nav'


const Navbar=(props) => {
  const dispatch=useDispatch()


  return (
    <div>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/blogs">Blogs</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link onClick={() => dispatch(logOutUser(props.user))}>Logout</Nav.Link>
        </Nav.Item>
      </Nav>

    </div>
  )
}

export default Navbar