const defaultState = {
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber: "",
    signUpLink: "/",
    userObj:{
      firstName : "",
    lastName : "",
    username : "",
    email : "",
    password : "",
    phoneNumber: "",
    restaurant_owner: false
    },
  };
  
  export default function SignUpReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'POST_CUSTOMER_DATA_FULFILLED': {
        return {
          ...state,
          userObj: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_FIRST_NAME': {
        return {
          ...state,
          firstName: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_LAST_NAME': {
        return {
          ...state,
          lastName: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_USERNAME': {
        return {
          ...state,
          username: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_EMAIL': {
        return {
          ...state,
          email: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_PASSWORD': {
        return {
          ...state,
          password: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_PHONE_NUMBER': {
        return {
          ...state,
          phoneNumber: payload
        };
      }
      case 'UPDATE_SIGN_UP_LINK_TO_CUSTOMER': {
        return {
          ...state,
          signUpLink: payload
        };
      }
      case 'UPDATE_SIGN_UP_LINK_TO_OWNER': {
        return {
          ...state,
          signUpLink: payload
        };
      }
      default: {
        return state;
      }
    }
  }