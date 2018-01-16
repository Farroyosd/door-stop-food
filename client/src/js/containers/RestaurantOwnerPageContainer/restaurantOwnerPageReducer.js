const defaultState = {
    restaurantName : "",
    address : "",
    hours : "",
    phone : "",
    description : "",
    picture: "",
    foodType : "",
    waitTimes: "",
    restaurantObj:{
        restaurantName : "",
        address : "",
        hours : "",
        phone : "",
        description : "",
        picture:"",
        foodType : "",
        waitTimes: "",
        },
  };
  
  export default function RestaurantOwnerPageReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'POST_RESTAURANT_DATA_FULFILLED': {
        return {
          ...state,
          restaurantObj: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_NAME': {
        return {
          ...state,
          restaurantName: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_ADDRESS': {
        return {
          ...state,
          address: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_HOURS': {
        return {
          ...state,
          hours: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_PHONE': {
        return {
          ...state,
          phone: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_DESCRIPTION': {
        return {
          ...state,
          description: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_PICTURE': {
        return {
          ...state,
          picture: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_FOOD_TYPE': {
        return {
          ...state,
          foodType: payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_RESTAURANT_WAIT_TIMES': {
        return {
          ...state,
          waitTimes: payload
        };
      }
      default: {
        return state;
      }
    }
  }