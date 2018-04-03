const defaultState = {
    shoppingCart: [],
    quantity: 0
}

export default function menuReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART': {

            var foodItems = [...state.shoppingCart, payload];
            // foodItems.push(payload);

            return {
                ...state,
                shoppingCart: foodItems 
            }
        }
        case 'ITEM_INCREMENTER': {
            return {
                ...state.shoppingCart,
                quantity: state.quantity + 1
            }
        }
        case 'DELETE_ITEM': {
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