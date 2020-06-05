
  const initialState = {notification:''}

export const addNotification=(notification,timeout)=>{
    return async(dispatch)=>{
    dispatch({
      type:'SET_NOTIFICATION',
        notification,
})
    setTimeout(() => {
        dispatch(removeNotification())
    }, timeout);
    }
}
    export const removeNotification=()=>{
        return{
          type:'REMOVENOTIFICATION'
        }
    }
   
    export const voteNotification=(notification)=>{
        return{
          type:'VOTENOTIFICATION',
            notification,
        }
    }
const notificationReducer=(state=initialState,action)=>{

    switch(action.type){
case 'SET_NOTIFICATION':
    console.log('Notification state: ',state.notification)
        state={...state,notification:action.notification}
    return  state
case 'REMOVENOTIFICATION':
        state={...state,notification:null}
        return state
case 'VOTENOTIFICATION':
    state={...state,notification:action.notification}
    return state
    default:
        return state
    }
}
export default notificationReducer