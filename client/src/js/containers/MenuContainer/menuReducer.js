const defaultState = {
    shoppingCart: {
        quantity: 0,
        itemName: '',
        itemPrice: ''
    }
}

export default function menuReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART': {
            return {
                ...state,
                shoppingCart: payload 
            }
        }
        default: {
            return state;
          }
    }
}