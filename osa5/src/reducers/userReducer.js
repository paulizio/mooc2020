import loginService from '../services/login'
import blogService from '../services/blogs'
import { addErrorNotification } from '../reducers/notificationReducer'
export const loginUser=(credentials) => {
  return async dispatch => {
    try{
      const user=await loginService.login(credentials)
      window.localStorage.setItem(
        'loggedUser',JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch({
        type:'USER_LOGIN',
        data:{ user }
      })

    }catch(exception){
      dispatch(addErrorNotification('Invalid username or password',5000))
    }}
}
export const logOutUser=() => {
  return async dispatch => {
    dispatch({
      type:'USER_LOGOUT'
    })
  }
}
const userReducer=(state=null,action) => {
  switch(action.type){
  case'USER_LOGIN':
    return action.data.user
  case'USER_LOGOUT':
    return null
  default:
    return state
  }
}
export default userReducer