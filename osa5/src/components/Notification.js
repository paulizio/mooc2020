import React from 'react'
import '../App.css'
import Alert from 'react-bootstrap/Alert'
import { useSelector } from 'react-redux'
const Notification=() => {
  const notification=useSelector(state => state.notification)
  if (notification===null){
    return null
  }
  return(
    <div className={notification.className}>
      <Alert variant={notification.className}>
        {notification.notification}
      </Alert>
    </div>
  )
}
export default Notification