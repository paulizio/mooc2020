import React from 'react'
import { logOutUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { Navbar,Nav,Button } from 'react-bootstrap/'


const NavigationBar=(props) => {
  const dispatch=useDispatch()


  return (
    <div>
      {props.user?
        <Navbar bg="dark" variant="dark">
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/blogs">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Button variant ="dark" onClick={() => dispatch(logOutUser(props.user))}>Logout</Button>
            </Nav.Item>
          </Nav>
        </Navbar>
        :<Navbar bg="dark" variant="dark">
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/blogs" disabled>Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/users" disabled>Users</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Button variant ="dark" onClick={() => dispatch(logOutUser(props.user))} disabled>Logout</Button>
            </Nav.Item>
          </Nav>
        </Navbar>}

    </div>

  )
}

export default NavigationBar