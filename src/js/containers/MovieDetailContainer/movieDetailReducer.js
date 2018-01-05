const defaultState = {
    movieDataDetails : "",
  };
  
  export default function movieDetailReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'GET_MOVIE_DATA_DETAILS_FULFILLED': {
        return {
          ...state,
          movieDataDetails: payload
        };
      }
      default: {
        return state;
      }
    }
  }