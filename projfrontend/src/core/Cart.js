import React, { useState,useEffect } from 'react';
import Base from "./Base";
import Card from "./Card";
import {loadCart} from "./helper/cartHelper";
import PaymentB from "./PaymentB";

function Cart() {
    const [products,setProducts] = useState([]);
    
    const [reload,setReload] = useState(false);
    useEffect(()=>{
        setProducts(loadCart());
    },[reload]);

    const loadAllProducts = (products) => {
        return(
            <div>
                {products.map((product,index)=>(
                    <Card 
                        key={index}
                        product={product}
                        removeFromCart={true}
                        AddtoCart={false}
                        reload={reload}
                        setReload={setReload}
                    />
                ))}
            </div>
        )
    }
    const loadCheckout = () => {
        return(
            <div>
                <h1>checkout</h1>
            </div>
        )
    }
    return (
        <Base title="Cart" description="Your Cart">
            <div className="row text-center">
            {/*
            {!products ? (
                <div className="col-6">
                    <h1>Empty Cart</h1>
                    </div>
            ):(
                <div className="col-6">
                    {loadAllProducts(loadCart())}
                </div>
            )} */}
            <div className="col-6">
                     {products.length > 0 ? (loadAllProducts(products)) : (
                     <h4>No products</h4>
                        )}
                </div>

                <div className="col-6">
                    {
                        products.length > 0 ? (
                            <PaymentB products={products} setReload={setReload} />
                        ):
                        (
                            <h3>PLease Login or add products to the cart</h3>
                        )
                    }
                </div>
            </div>
        </Base>
    )
}

export default Cart
