import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../NavBarContainer';
import { addToCart, itemIncrementer, deleteItem } from './menuActions'


class MenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.addToCartHandler = this.addToCartHandler.bind(this);
        this.incrementer = this.incrementer.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            isOpen: false
        }
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    incrementer() {
        const { dispatch } = this.props;
        dispatch(itemIncrementer());

    }

    addToCartHandler(e) {
        const { dispatch } = this.props;
        const id = e.target.title;
        const restaurantData = this.props.searchData;
        const menuDataRaw = restaurantData.filter(restaurant => restaurant.id === `${this.props.match.params.id}`);
        const menuData = menuDataRaw[0];
        const index = menuData.menu.map(item => item.id).indexOf(e.target.title);
        const itemData = menuData.menu[index];
        dispatch(addToCart(itemData));

    }



    deleteItem(e) {
        const { dispatch } = this.props;
        const currentCart = this.props.shoppingCart
        const deleteId = e.target.id
        const updatedDelete = currentCart.filter(item => item.id !== deleteId);
        dispatch(deleteItem(updatedDelete))
    }


    render() {
        const restaurantData = this.props.searchData;
        const menuDataRaw = restaurantData.filter(restaurant => restaurant.id === `${this.props.match.params.id}`);
        const menuData = menuDataRaw[0];

        const cartClass = this.state.isOpen ? 'open' : 'close';
        const cartItem = this.props.shoppingCart

        return (
            <div className="menuContainer">
                <div className="menuHeader" style={{ backgroundImage: "url(" + menuData.restaurant + ")" }}>
                    <NavBarContainer />
                    <button id="tester1" className="cartBtn" onClick={this.toggleMenu}>Cart</button>

                    <div className="cartContainer">
                        <div className={`cart ${cartClass}`} id="cart">
                            <h4><strong>Shopping Cart</strong></h4>
                            <div>
                                {(!!cartItem && !!cartItem) && cartItem.map(item => {
                                    return (
                                        <div>
                                            <hr className="cartLine" />
                                            <div className="cartItem">
                                                <div className="quantity">
                                                    <p>1</p>
                                                </div>
                                                <div className="itemName">
                                                    <p>{item.item_name}</p>
                                                </div>
                                                <div className="price">
                                                    <p>{item.price}</p>
                                                </div>
                                                <div className="delete">
                                                    <p><i className="fa fa-trash" id={item.id} onClick={this.deleteItem}></i></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                                }
                            </div>
                            <button type="button" className="btn btn-primary form-control pr-pl-25" data-toggle="modal" data-target="#exampleModalLong">Checkout</button>
                            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="text-center" id="exampleModalLongTitle">Review your order</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                        <div className="modal-body">
                            Your order has been recived!
                        </div>
                            <div className="modal-footer">
                                <Link to="/" className="btn btn-secondary form-control">
                                                Confirm your Order
                                 
                                </Link>
                            </div>
                        </div>
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
                                        <div className="item" onClick={this.addToCartHandler} title={item.id}>

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
                                    <div className="item" onClick={this.addToCartHandler} title={item.id}>
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
                    <h2 className="menuCategory">Breakfast</h2>
                </div>
                <div className="menuItems">
                    {!!menuData.menu && menuData.menu
                        .filter(item => item.category === "Breakfast")
                        .map(item => {
                            return (
                                <div className="item" onClick={this.addToCartHandler} title={item.id}>
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
                                <div className="item" onClick={this.addToCartHandler} title={item.id}>
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