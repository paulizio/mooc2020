
  const initialState = {notification:''}

export const addNotification=(notification)=>{
    return{
      type:'SET_NOTIFICATION',
        notification
    }
}



const notificationReducer=(state=initialState,action)=>{

    switch(action.type){
case 'SET_NOTIFICATION':
    console.log('Notification state: ',state.notification)
        state={...state,notification:action.notification}
    return  state
    default:
        return state
    }
}
export default notificationReducer