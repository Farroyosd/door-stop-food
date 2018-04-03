import axios from 'axios';

export function postCustomerData(customerData) {



    return {
        type: 'POST_CUSTOMER_DATA',
        payload: 
        axios
            .post('api/customers', customerData )
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
export function updateSignUpInputFirstName(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_FIRST_NAME',
        payload: value
    }
};

export function updateSignUpInputLastName(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_LAST_NAME',
        payload: value
    }
};
export function updateSignUpInputUsername(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_USERNAME',
        payload: value
    }
};
export function updateSignUpInputEmail(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_EMAIL',
        payload: value
    }
};
export function updateSignUpInputPassword(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_PASSWORD',
        payload: value
    }
};
export function updateSignUpInputPhoneNumber(value) {

    return {
        type: 'UPDATE_SIGN_UP_INPUT_PHONE_NUMBER',
        payload: value
    }
};
export function updateSignUpLinkToCustomer(value) {

    return {
        type: 'UPDATE_SIGN_UP_LINK_TO_CUSTOMER',
        payload: value
    }
};

export function updateSignUpLinkToOwner(value) {

    return {
        type: 'UPDATE_SIGN_UP_LINK_TO_OWNER',
        payload: value
    }
};
