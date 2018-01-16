import axios from 'axios';

export function postMenuData(menuData, restaurantID) {



    return {
        type: 'POST_MENU_DATA',
        payload: 
        axios
            .post('api/restaurants/'+ restaurantID + "/menuItems", menuData )
            .then(response => {
                return response.data;
            })
            .catch(error => {
                const errorUserData = {
                    error: true
                }

                return errorUserData;
            })

        
    }
};
export function addToMenuArray(menuItemObj) {

    return {
        type: 'ADD_TO_MENU_ARRAY',
        payload: menuItemObj
    }
};
export function updateSignUpInputMenuItemName(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_NAME',
        payload: value
    }
};
export function updateSignUpInputMenuItemPrice(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_PRICE',
        payload: value
    }
};
export function updateSignUpInputMenuItemDescription(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_DESCRIPTION',
        payload: value
    }
};
export function updateSignUpInputMenuItemCategory(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_MENU_ITEM_CATEGORY',
        payload: value
    }
};
