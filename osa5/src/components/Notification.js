import React from 'react'
import '../App.css'
import { useSelector } from 'react-redux'
const Notification=() => {
  const notification=useSelector(state => state.notification)
  if (notification===null){
    return null
  }
  return(
    <div className={notification.className}>
      {notification.notification}
    </div>
  )
}
export default Notification