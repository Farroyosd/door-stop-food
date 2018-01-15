const defaultState = {
    restaurantName : "",
    address : "",
    hours : "",
    phone : "",
    description : "",
    picture: "",
    foodType : "",
    waitTimes: "",
    menuItemName: "",
    menuItemPrice: "",
    menuItemDescription: "",
    menuItemCategory: "Breakfast",
    menuArray:[],
    restaurantObj:{
        restaurantName : "",
        address : "",
        hours : "",
        phone : "",
        description : "",
        picture:"",
        foodType : "",
        waitTimes: "",
        menuArray:[],
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
      case 'ADD_TO_MENU_ARRAY': {
        return {
          ...state,
          menuArray: [...state.menuArray, payload]
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
      case 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_NAME': {
        return {
          ...state,
          menuItemName : payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_PRICE': {
        return {
          ...state,
          menuItemPrice : payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_DESCRIPTION': {
        return {
          ...state,
          menuItemDescription : payload
        };
      }
      case 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_CATEGORY': {
        return {
          ...state,
          menuItemCategory : payload
        };
      }
      default: {
        return state;
      }
    }
  }