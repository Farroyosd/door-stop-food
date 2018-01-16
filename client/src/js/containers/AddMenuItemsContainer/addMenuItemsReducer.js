const defaultState = {
    menuItemName: "",
    menuItemPrice: "",
    menuItemDescription: "",
    menuItemCategory: "Breakfast",
    menuArray:[],
    postedMenuObj:{
        menuItemName: "",
        menuItemPrice: "",
        menuItemDescription: "",
        menuItemCategory: "",
        },
  };
  
  export default function AddMenuItemsReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'POST_MENU_DATA_FULFILLED': {
        return {
          ...state,
          postedMenuObj: payload
        };
      }
      case 'ADD_TO_MENU_ARRAY': {
        return {
          ...state,
          menuArray: [...state.menuArray, payload]
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