import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer.js/Developer';
import "./Main.css"
const Main = () => {
const [developers,setDevelopers]=useState([])
  const [cart, setCart] = useState([])
  const handleAddToCart = (developer) => {
    const newCart = [...cart, developer]
    // console.log(newCart);
    setCart(newCart)
  }
  useEffect(() => {
  fetch("./Programmer.json")
  .then(res=>res.json())
  .then(data=>setDevelopers(data))
  }, [])
  

  return (
    <div className=" d-flex  ">
        {/* <h2>Developer part {developers.length}</h2> */}
      <div className="col-md-10 row row-cols-1 row-cols-md-3 g-4 p-5 ">
        {
          developers.map(developer => <Developer
            key={developer.key}
            handleAddToCart={handleAddToCart}
            developer={developer}
          ></Developer>)
        }
        
      </div>
      <div className="col-md-2">
        <Cart
        cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Main;