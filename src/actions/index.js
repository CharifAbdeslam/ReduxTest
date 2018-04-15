const API_URL = 'https://jsonplaceholder.typicode.com/users/';
export const GET_USERS = 'GET_USERS';
export const DEL_USERS = 'DEL_USERS';
export const ONE_USER = 'ONE_USER';

export const getUser = () => dispatch => {
  fetch(API_URL).then(res=>res.json())
    .then(data => dispatch({type:GET_USERS,payload:data}))
}
export const delUser=(id)=> dispatch =>{
  fetch(`${API_URL}${id}`,{
      method:"DELETE"
      }).then(()=>dispatch({type:DEL_USERS}))
}
export const oneUser=(id)=> dispatch =>{
    fetch(`${API_URL}${id}`).then(res => res.json())
         .then(data => dispatch({type:ONE_USER , payload:data}))
}
