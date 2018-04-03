import React from 'react';
import { Link } from 'react-router-dom';
import {
    updateSignUpInputMenuItemName,
    updateSignUpInputMenuItemPrice,
    updateSignUpInputMenuItemDescription,
    updateSignUpInputMenuItemCategory,
    addToMenuArray,
    postMenuData,
} from './addMenuItemsActions';
import NavBarContainer from '../NavBarContainer';

class AddMenuItemsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputMenuItemName = this.handleInputMenuItemName.bind(this);
        this.handleInputMenuItemPrice = this.handleInputMenuItemPrice.bind(this);
        this.handleInputMenuItemDescription = this.handleInputMenuItemDescription.bind(this);
        this.handleInputMenuItemCategory = this.handleInputMenuItemCategory.bind(this);
        this.handlePostMenuItem = this.handlePostMenuItem.bind(this);
    }
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
        const { dispatch, menuItemName, menuItemPrice, menuItemDescription, menuItemCategory, restaurantObj } = this.props;
        var menuItemObj = {
            "item_name": menuItemName,
            "price": parseFloat(menuItemPrice),
            "description": menuItemDescription,
            "category": menuItemCategory,
        }

        dispatch(addToMenuArray(menuItemObj));
        dispatch(postMenuData(menuItemObj, restaurantObj.id));
        this.refs.form.reset();
        dispatch(updateSignUpInputMenuItemCategory("Breakfast"));

    };

    render() {
        const {menuItemName,
            menuItemPrice, menuItemDescription,
            menuItemCategory, menuArray, restaurantObj,
            userObj} = this.props;
        return (
            <div className="signUpRestaurantBG">
                <NavBarContainer />
                <div className='signUpRestaurant'>
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
                                <button onClick={this.handlePostMenuItem} className="addMenuBtn">Add Item to Menu</button>
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
                </div>

            </div>
        );
    }
}

export default AddMenuItemsContainer;