import React, { useState } from 'react';
import ImageHelper from "./helper/ImageHelper"
import {Redirect} from "react-router-dom";
import { addItemToCard,removeItemFromCart } from './helper/cartHelper';
import {isAuthenticated} from "../auth/helper/index";
//TODO


const Card = ({
    product,
    AddtoCart=true,
    removeFromCart=false,
    reload = undefined,
    setReload = f => f,
    //function(f){return f}
}) => {

    const [redirect,setRedirect] = useState(false);

    const cartTitle = product ? product.name : "default T-Shirt";
    const cartDescription = product ? product.description: "default description";
    const cartPrice = product ? product.price: "default price";

    const addtoCart = () => {
      if (isAuthenticated()){
        addItemToCard(product,()=>setRedirect(true));
        console.log("Added to Cart");
      }else{
        console.log("login please");//try redirecting the user to signin
        
      }
    };

    const getAredirect = (redirect) => {
      if(redirect){
        return (
          <Redirect to="/cart" />
        );
      }
    }

    const showAddToCart = (AddtoCart) =>{
      return(
        AddtoCart && (
          <button
          onClick={addtoCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
        )
      )
    }

    const showRemoveFromCart = removeFromCart =>{
          return(

           removeFromCart &&    <button
            onClick={() => {
              removeItemFromCart(product.id);
              setReload(!reload);
              console.log("Product Removed from Cart");//handle removal
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove from cart
          </button>
          )
    }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
        {getAredirect(redirect)}
         <ImageHelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$  {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(AddtoCart)}
            </div>
            <div className="col-12">
                {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card
