import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer.js/Developer';
import "./Main.css"
const Main = () => {
  // ststes 
const [developers,setDevelopers]=useState([])
  const [cart, setCart] = useState([])

  // event handeler 
  const handleAddToCart = (developer) => {
    const newCart = [...cart, developer]
 
    setCart(newCart)
  }

  // load data 
  useEffect(() => {
  fetch("./Programmer.json")
  .then(res=>res.json())
  .then(data=>setDevelopers(data))
  }, [])
  

  return (
    <div className=" d-flex  ">
       {/* developer card */}
      <div className="col-md-10 row row-cols-1 row-cols-md-3 g-4 p-5 ">
        {
          developers.map(developer => <Developer
            key={developer.key}
            handleAddToCart={handleAddToCart}
            developer={developer}
          ></Developer>)
        }
        
      </div>
      {/* cart ans salary total */}
      <div className="col-md-2">
        <Cart
        cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Main;