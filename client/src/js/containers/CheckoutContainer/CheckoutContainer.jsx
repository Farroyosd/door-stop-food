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
                            ...
                        </div>
                            <div className="modal-footer">
                                <Link to="/" className="btn btn-secondary form-control">
                                                Submit your Order
                                 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutContainer;