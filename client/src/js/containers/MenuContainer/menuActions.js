

export const addToCart = (itemData) => {

   return {
        type: 'ADD_TO_CART',
        payload: itemData
   }
}

export const itemIncrementer = () => {

    return {
        type: 'ITEM_INCREMENTER'
    }
}

export const deleteItem = (updatedDelete) => {
    return {
        type: 'DELETE_ITEM',
        payload: updatedDelete
    }
}