const API_URL = 'https://jsonplaceholder.typicode.com/users/';
export const GET_USERS = 'GET_USERS'
export const DEL_USERS = 'DEL_USERS'
export const getUser = () => dispatch => {
  fetch(API_URL).then(res=>res.json())
    .then(data => dispatch({type:GET_USERS,payload:data}))
}
export const delUser=(id)=> dispatch =>{
  fetch(`${API_URL}${id}`,{
      method:"DELETE"
      }).then(()=>dispatch({type:DEL_USERS}))
}
