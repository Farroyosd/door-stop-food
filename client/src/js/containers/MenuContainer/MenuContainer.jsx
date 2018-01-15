import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../NavBarContainer';
import {addToCart} from './menuActions.js'
// import ShoppingCartContainer from '../ShoppingCartContainer';


class MenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.addToCartHandler = this.addToCartHandler.bind(this);
        
        this.state = {
            isOpen: false
        }
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    addToCartHandler(e) {
        const { dispatch } = this.props;
        const id = e.target.title;
        const restaurantData = this.props.searchData;
        const menuDataRaw = restaurantData.filter(restaurant => restaurant.id === `${this.props.match.params.id}`);
        const menuData = menuDataRaw[0];
        const index = menuData.menu.map(item => item.id).indexOf(e.target.title);
        const itemData = menuData.menu[index]
        // console.log(itemData);
        // console.log(menuData.menu[index]);
        // const foodName = this.props.searchData.indexOf(this);
        // console.log(foodName)
        dispatch(addToCart(itemData));
    }


    render() {
        const restaurantData = this.props.searchData;
        const menuDataRaw = restaurantData.filter(restaurant => restaurant.id === `${this.props.match.params.id}`);
        const menuData = menuDataRaw[0];

        const cartClass = this.state.isOpen ? 'open' : 'close';

        return (
            <div className="menuContainer">
                <div className="menuHeader">
                    <NavBarContainer />
                    <button id="tester1" onClick={this.toggleMenu}>Menu</button>

                    <div className="cartContainer">
                        <div className={`cart ${cartClass}`} id="cart">
                            <h4><strong>Shopping Cart</strong></h4>
                            <hr className="cartLine" />
                            <div className="cartItem">
                                <div className="quantity">
                                    <p>1</p>
                                </div>
                                <div className="itemName">
                                    <p>Veal Parmigian</p>
                                </div>
                                <div className="price">
                                    <p>16.95</p>
                                </div>
                                <div className="delete">
                                    <p><i className="fa fa-trash"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menuBody">
                    <h1>{menuData.restaurant_name}</h1>
                    <div>
                        <div className="categoryHeader">
                            <h2 className="menuCategory">Appetizers</h2>
                        </div>
                        <div className="menuItems">
                            {!!menuData.menu && menuData.menu
                                .filter(item => item.category === "Appetizer")
                                .map(item => {
                                    return (
                                        <div className="item" onClick={this.addToCartHandler} id={item.id}>

                                            <h5 className="foodName">{item.item_name}</h5>
                                            <h5 className="foodPrice">{item.price}</h5>
                                            <p className="foodDescription">{item.description}</p>
                                            <div className="middle">
                                                <div className="orderText">
                                                    <h4 title={item.id}>Add To Cart</h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                    <div className="categoryHeader">
                        <h2 className="menuCategory">Entrees</h2>
                    </div>
                    <div className="menuItems">
                        {!!menuData.menu && menuData.menu
                            .filter(item => item.category === "Entree")
                            .map(item => {
                                return (
                                    <div className="item">
                                        <h5 className="foodName">{item.item_name}</h5>
                                        <h5 className="foodPrice">{item.price}</h5>
                                        <p className="foodDescription">{item.description}</p>
                                        <div className="middle">
                                            <div className="orderText">
                                                <h4>Add To Cart</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>

                <div className="categoryHeader">
                    <h2 className="menuCategory">Breakfast</h2>
                </div>
                <div className="menuItems">
                    {!!menuData.menu && menuData.menu
                        .filter(item => item.category === "Breakfast")
                        .map(item => {
                            return (
                                <div className="item">
                                    <h5 className="foodName">{item.item_name}</h5>
                                    <h5 className="foodPrice">{item.price}</h5>
                                    <p className="foodDescription">{item.description}</p>
                                    <div className="middle">
                                        <div className="orderText">
                                            <h4>Add To Cart</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>

                <div className="categoryHeader">
                    <h2 className="menuCategory">Drinks</h2>
                </div>
                <div className="menuItems">
                    {!!menuData.menu && menuData.menu
                        .filter(item => item.category === "Drink")
                        .map(item => {
                            return (
                                <div className="item">
                                    <h5 className="foodName">{item.item_name}</h5>
                                    <h5 className="foodPrice">{item.price}</h5>
                                    <p className="foodDescription">{item.description}</p>
                                    <div className="middle">
                                        <div className="orderText">
                                            <h4>Add To Cart</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>


            </div>
        )
    }
}

export default MenuContainer;