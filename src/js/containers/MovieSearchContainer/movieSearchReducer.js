const defaultState = {
    movieData : "",
  };
  
  export default function MovieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      
  
      case 'GET_MOVIE_DATA_FULFILLED': {
        return {
          ...state,
          movieData: payload
        };
      }
      default: {
        return state;
      }
    }
  }