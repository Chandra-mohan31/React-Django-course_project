import React,{useState,useEffect} from 'react';
import { API } from "../backend";
import Base from './Base';
import '../styles.css';
import Card from './Card';



function Home() {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch(`${API}product/`)
           .then(response=>response.json())
           .then(data=>setProducts(data))	
      
      
      },[])

    return (
        <Base title="Home Page" description="Welcome to our store">
            <h1>Home</h1>
            <div className="row">
            {
                products.map((product,index)=>{
                    return(
                        <div key={index} className="col-4 mb-4" >
                        <Card product={product} />
                        </div>
                    )
                })
            } 
            </div>
            {/*
            {
                JSON.stringify(products)
            }  */}
        </Base>
    )
}

export default Home
