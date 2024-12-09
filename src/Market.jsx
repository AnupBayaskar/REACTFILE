import axios from "axios";
import React, { useEffect, useState } from "react";

const Market=()=>{
 const [product,setProduct]=useState([]);
 const getProduct = async()=>{
    try{
        const response = await axios('https://fakestoreapi.com/carts')
        setProduct(response.data);
    }catch (error){
        console.error('error fetching data:', error);
    }

 }
 useEffect(()=>{
    getProduct();
 },[])
    return(
        <>

        <h1>bhuhu</h1>
        {
            product.map((item,index)=>{
        return(
            <div key={item.index}>
                {item.id}
                {item.userId}
                {item.date}
            </div>
        )
            })
        }
        </>
    )
}
export default Market