import React from "react";
import "./Cart.css";
const Cart = (props) => {
    console.log(props);
    const { cart } = props
    const totalReducer = (pervValue,currentValue)=>parseFloat(pervValue)+parseFloat(currentValue.salary)
    const total = cart.reduce(totalReducer, 0)
   
    return (
        <div>
            <div className="card border-info mb-3 mt-5" style={{ maxWidth: "18rem" }}>
                <div className="card-header text-center">CART</div>
                <div className="card-body">
                    <h6 className="card-title"> <i className="fas fa-user"></i>  : {cart.length} </h6>
                    <h6 className="card-title"> <i className="fas fa-money-check-alt"></i>  : {total} </h6>
                    <p className="card-text">
                        {
                            cart.map(programmer =>
                                // <li>{<img src={programmer.img} alt="" width="30px" />}{programmer.name}</li>
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={programmer.img} className="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <small className="card-title">{programmer.name
                                                }</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
