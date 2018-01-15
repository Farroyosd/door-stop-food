const defaultState = {
    username : "",
    password : "",
    userLogin: 1
    };


  export default function navbarReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case 'USER_NAME' : {
            return {
            ...state,
            username: payload.username
            };
        }
    case 'PASSWORD' : {
            return {
            ...state,
            password: payload.password
            };
        }
    case 'USER_LOGIN' : {
            return {
                ...state,
            userLogin: payload.userLogin
            };
    }
      

      default: {
        return state;
      }
    }
  }