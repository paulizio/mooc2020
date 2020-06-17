import React from 'react'
import Table from 'react-bootstrap/Table'

const Users= (props) => {

  return(
    <div>
      {props.user?
        <div>
          <h2>Users</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>blogs created</th>
              </tr>
            </thead>
            <tbody>
              {props.users.map(user => <tr key={user.id}><td>{user.name}</td><td>{user.blogs.length}</td></tr>)}
            </tbody>
          </Table></div>
        :null}
    </div>
  )}


export default Users