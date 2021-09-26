import React from "react";
import AddCart from "../AddCart/AddCart";
import "./Cart.css";
const Cart = (props) => {
   
    const { cart } = props
    // total salary
    const totalReducer = (pervValue,currentValue)=>parseFloat(pervValue)+parseFloat(currentValue.salary)
    const total = cart.reduce(totalReducer, 0)
   
    return (
        <div>
            <div className="card border-info mb-3 mt-5" style={{ maxWidth: "18rem" }}>
                <div className="card-header text-center">CART</div>
                <div className="card-body">
                    <h6 className="card-title"> <i className="fas fa-user"></i>  : {cart.length} </h6>
                    <h6 className="card-title"> <i className="fas fa-money-check-alt"></i>  : {total} </h6>

                    {/* person name and image added to cart  */}
                    
                    <AddCart programmer={cart}
                      key={cart.key}
                    ></AddCart>
                </div>
            </div>
        </div>
    );
};

export default Cart;
