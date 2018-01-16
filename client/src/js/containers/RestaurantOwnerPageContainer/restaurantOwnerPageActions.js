import axios from 'axios';

export function postRestaurantData(restaurantData) {



    return {
        type: 'POST_RESTAURANT_DATA',
        payload: 
        axios
            .post('api/restaurants', restaurantData )
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
export function updateSignUpInputRestaurantName(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_NAME',
        payload: value
    }
};

export function updateSignUpInputRestaurantAddress(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_ADDRESS',
        payload: value
    }
};
export function updateSignUpInputRestaurantHours(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_HOURS',
        payload: value
    }
};
export function updateSignUpInputRestaurantPhone(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_PHONE',
        payload: value
    }
};
export function updateSignUpInputRestaurantDescription(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_DESCRIPTION',
        payload: value
    }
};
export function updateSignUpInputRestaurantPicture(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_PICTURE',
        payload: value
    }
};
export function updateSignUpInputRestaurantFoodType(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_FOOD_TYPE',
        payload: value
    }
};
export function updateSignUpInputRestaurantWaitTimes(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_RESTAURANT_WAIT_TIMES',
        payload: value
    }
};
