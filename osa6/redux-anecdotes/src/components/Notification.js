import React from 'react'
// import { useSelector } from 'react-redux'
import {connect} from 'react-redux'

const Notification = (props) => {
  // const notification=state=>state.notification.notification
  console.log('notifiation value:', props.notification)
  const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1
  }
  if(props.notification){
  return (
    <div style={style}>
     <p> {props.notification} </p>
    </div>
  )
  }
return null
}

const notificationStateToProps=(state)=>{
  return{
  notification:state.notification.notification
  }}
const ConnectedNotification=connect(notificationStateToProps)(Notification)
export default ConnectedNotification
