const initialState={ notification:'',
  className:'' }
export const addErrorNotification=(notification,timeout) => {
  return async(dispatch) => {
    dispatch({
      type:'SET_ERROR_NOTIFICATION',
      notification
    })
    setTimeout(() => {
      dispatch(removeNotification())
    },timeout)
  }
}
export const addSuccessNotification=(notification,timeout) => {
  return async(dispatch) => {
    dispatch({
      type:'SET_SUCCESS_NOTIFICATION',
      notification
    })
    setTimeout(() => {
      dispatch(removeNotification())
    },timeout)
  }
}
export const removeNotification=() => {
  return{
    type:'REMOVENOTIFICATION'
  }
}

const notificationReducer=(state=initialState,action) => {
  switch(action.type){
  case'SET_ERROR_NOTIFICATION':
    return { ...state,notification:action.notification,className:'danger' }
  case 'SET_SUCCESS_NOTIFICATION':
    return { ...state,notification:action.notification,className:'success' }
  case 'REMOVENOTIFICATION':
    return { ...state,notification:null,className:null }
  default:
    return state
  }
}
export default notificationReducer