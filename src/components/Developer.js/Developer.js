import React from "react";
import "./Developer.css";
const Developer = (props) => {
  const { name, email, img, address, salary, youtube_channel } =
    props.developer;
  return (
    <div>
      <div className="">
        <div className="col">
          <div className="card h-100 cardBgStyle">
            <img
              src={img}
              className="card-img-top w-50  mx-auto mt-2 imageStyle"
              alt="..."
            ></img>
            <div className="card-body ">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">
                <i className="fab fa-youtube"></i> : <b> {youtube_channel}</b>
              </p>
              <address>
                <i className="fas fa-map-marker-alt"></i> : {address}
              </address>
              <p>
                <i className="fas fa-at"></i> : <small>{email}</small>
              </p>
              <p>
                <i className="fas fa-dollar-sign"></i> : {salary}
              </p>

              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  onClick={() => props.handleAddToCart(props.developer)}
                  className="btn btnColor"
                  type="button"
                >
                  <i className="fas fa-cart-plus"></i> add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
