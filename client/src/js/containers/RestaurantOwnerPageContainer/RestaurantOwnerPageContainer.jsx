import React from 'react';
import { Link } from 'react-router-dom';
import {
    updateSignUpInputRestaurantName,
    updateSignUpInputRestaurantAddress,
    updateSignUpInputRestaurantHours,
    updateSignUpInputRestaurantPhone,
    updateSignUpInputRestaurantDescription,
    updateSignUpInputRestaurantPicture,
    updateSignUpInputRestaurantFoodType,
    updateSignUpInputRestaurantWaitTimes,
    postRestaurantData,
} from './restaurantOwnerPageActions';
import NavBarContainer from '../NavBarContainer';

class RestaurantOwnerPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputRestaurantName = this.handleInputRestaurantName.bind(this);
        this.handleInputRestaurantAddress = this.handleInputRestaurantAddress.bind(this);
        this.handleInputRestaurantHours = this.handleInputRestaurantHours.bind(this);
        this.handleInputRestaurantPhone = this.handleInputRestaurantPhone.bind(this);
        this.handleInputRestaurantDescription = this.handleInputRestaurantDescription.bind(this);
        this.handleInputRestaurantPicture = this.handleInputRestaurantPicture.bind(this);
        this.handleInputRestaurantFoodType = this.handleInputRestaurantFoodType.bind(this);
        this.handleInputRestaurantWaitTimes = this.handleInputRestaurantWaitTimes.bind(this);
        this.handlePostRestaurant = this.handlePostRestaurant.bind(this);
    }
    handleInputRestaurantName(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantName(value));
    };
    handleInputRestaurantAddress(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantAddress(value));
    };
    handleInputRestaurantHours(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantHours(value));
    };
    handleInputRestaurantPhone(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantPhone(value));
    };
    handleInputRestaurantDescription(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantDescription(value));
    };
    handleInputRestaurantPicture(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantPicture(value));
    };
    handleInputRestaurantFoodType(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantFoodType(value));
    };
    handleInputRestaurantWaitTimes(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputRestaurantWaitTimes(value));
    };
    handlePostRestaurant() {
        const { dispatch, restaurantName, address, description, phone, foodType, waitTimes, hours, picture } = this.props;
        var signUpOwnerObj = {
            "restaurant_name": restaurantName,
            "address": address,
            "description": description,
            "phone_number": phone,
            "food_type": foodType,
            "wait_time": waitTimes,
            "hours_of_operation": hours,
            "restaurant": picture,
        }

        console.log(signUpOwnerObj)

        dispatch(postRestaurantData(signUpOwnerObj));

    };









    render() {
        const { restaurantName,
            address, hours, phone,
            description, foodType,
            waitTimes, restaurantObj,
            userObj, picture } = this.props;
        return (
            <div className="signUpRestaurantBG">
                <NavBarContainer />
                <div className='signUpRestaurant'>
                        <input className="signUpRestaurantInput" type='text' placeholder='Restaurant Name*' value={restaurantName} onChange={this.handleInputRestaurantName} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Address*' value={address} onChange={this.handleInputRestaurantAddress} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Hour of Operation*' value={hours} onChange={this.handleInputRestaurantHours} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Phone:*' value={phone} onChange={this.handleInputRestaurantPhone} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Description*' value={description} onChange={this.handleInputRestaurantDescription} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Add a Restaurant Cover Photo' value={picture} onChange={this.handleInputRestaurantPicture} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Food Type*' value={foodType} onChange={this.handleInputRestaurantFoodType} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Average Wait Times*' value={waitTimes} onChange={this.handleInputRestaurantWaitTimes} />
                        <Link to="/addmenuitems" ><button className="signUpSaveBtn" onClick={this.handlePostRestaurant}>Proceed to add menu items</button></Link>
                </div>

            </div>
        );
    }
}

export default RestaurantOwnerPageContainer;