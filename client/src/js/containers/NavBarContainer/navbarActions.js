export function updateUserName(username) {
    return {
      type: 'USER_NAME',
      payload: { username }
    };
  }
  
  export function updatePassword(password) {
    return {
      type: 'PASSWORD',
      payload: { password }
    };
  }

  export function loggedInUser(userLogin) {
    return {
    type: 'USER_LOGIN',
    payload: { userLogin } 
  };
}

  