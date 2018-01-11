const defaultState = {
    address : "",
  };
  
  export default function searchReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'GET_SEARCH_DATA': {
        return {
          ...state,
          address: payload
        };
      }
      default: {
        return state;
      }
    }
  }