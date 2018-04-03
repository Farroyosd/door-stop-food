import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="checkoutContainer">
                <div className="backButtonContainer">
                    <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i><p>Back to La Taquero</p>
                </div>
                <h1>Checkout</h1>
                    <button type="button" className="btn btn-primary pr-pl-25" data-toggle="modal" data-target="#exampleModalLong">
                            Review Order
                    </button>
            </div>
        )
    }
}

export default CheckoutContainer;