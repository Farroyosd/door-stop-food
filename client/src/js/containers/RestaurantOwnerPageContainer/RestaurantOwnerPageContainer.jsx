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
    updateSignUpInputMenuItemName,
    updateSignUpInputMenuItemPrice,
    updateSignUpInputMenuItemDescription,
    updateSignUpInputMenuItemCategory,
    addToMenuArray,
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
        this.handleInputMenuItemName = this.handleInputMenuItemName.bind(this);
        this.handleInputMenuItemPrice = this.handleInputMenuItemPrice.bind(this);
        this.handleInputMenuItemDescription = this.handleInputMenuItemDescription.bind(this);
        this.handleInputMenuItemCategory = this.handleInputMenuItemCategory.bind(this);
        this.handlePostRestaurant = this.handlePostRestaurant.bind(this);
        this.handlePostMenuItem = this.handlePostMenuItem.bind(this);
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
    handleInputMenuItemName(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputMenuItemName(value));
    };
    handleInputMenuItemPrice(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputMenuItemPrice(value));
    };
    handleInputMenuItemDescription(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputMenuItemDescription(value));
    };
    handleInputMenuItemCategory(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSignUpInputMenuItemCategory(value));
    };

    handlePostMenuItem(e) {
        e.preventDefault();
        const { dispatch, menuItemName, menuItemPrice, menuItemDescription, menuItemCategory } = this.props;
        var menuItemObj = {
            "item_name": menuItemName,
            "price": menuItemPrice,
            "description": menuItemDescription,
            "category": menuItemCategory,
        }

        dispatch(addToMenuArray(menuItemObj));
        this.refs.form.reset();
        dispatch(updateSignUpInputMenuItemCategory("Breakfast"));

    };



    handlePostRestaurant(e) {
        e.preventDefault();
        const { dispatch, restaurantName, menuArray, address, description, phone, foodType, waitTimes, hours, picture } = this.props;
        var signUpOwnerObj = {
            "restaurant_name": restaurantName,
            "menu": menuArray,
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
            waitTimes, menuItemName,
            menuItemPrice, menuItemDescription,
            menuItemCategory, menuArray, restaurantObj,
            userObj, picture } = this.props;
        return (
            <div className="signUpRestaurantBG">
                <NavBarContainer />
                <div className='signUpRestaurant'>
                    <div>
                        <input className="signUpRestaurantInput" type='text' placeholder='Restaurant Name*' value={restaurantName} onChange={this.handleInputRestaurantName} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Address*' value={address} onChange={this.handleInputRestaurantAddress} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Hour of Operation*' value={hours} onChange={this.handleInputRestaurantHours} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Phone:*' value={phone} onChange={this.handleInputRestaurantPhone} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Description*' value={description} onChange={this.handleInputRestaurantDescription} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Add a Restaurant Cover Photo' value={picture} onChange={this.handleInputRestaurantPicture} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Food Type*' value={foodType} onChange={this.handleInputRestaurantFoodType} />
                        <input className="signUpRestaurantInput" type='text' placeholder='Average Wait Times*' value={waitTimes} onChange={this.handleInputRestaurantWaitTimes} />
                        <div className="addMenuItemDiv">
                            <label>Add Menu Item</label>
                            <form ref="form">
                                <input className="signUpRestaurantInput" type='text' placeholder='Name*'  onChange={this.handleInputMenuItemName} />
                                <input className="signUpRestaurantInput" type='number' placeholder='Price*'  onChange={this.handleInputMenuItemPrice} />
                                <input className="signUpRestaurantInput" type='text' placeholder='Description*' onChange={this.handleInputMenuItemDescription} />
                                <select className="signUpRestaurantInput"  onChange={this.handleInputMenuItemCategory}>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Appetizer">Appetizer</option>
                                    <option value="Entree">Entree</option>
                                    <option value="Drink">Drink</option>
                                </select>
                            </form>
                                <button onClick={this.handlePostMenuItem} className="addMenuBtn">ADD</button>
                        </div>
                        <label className="menuLabel" >Menu Items</label>
                        <div className="menuList">
                            <table >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    menuArray.map(menuItem => {
                                        return(
                                        <tr>
                                            <td>{menuItem.item_name}</td>
                                            <td>{menuItem.price}</td>
                                            <td>{menuItem.description}</td>
                                            <td>{menuItem.category}</td>
                                        </tr>
                                    )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        <button className="signUpSaveBtn" onClick={this.handlePostRestaurant}>SAVE</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default RestaurantOwnerPageContainer;