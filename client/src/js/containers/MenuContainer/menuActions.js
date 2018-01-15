

export const addToCart = (itemData) => {
    console.log(itemData)
   return {
        type: 'ADD_TO_CART',
        payload: itemData
   }
}