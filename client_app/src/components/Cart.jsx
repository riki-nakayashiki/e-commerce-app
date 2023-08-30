import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import './Cart.css'

export default function Cart() {
    const [dataArr, setData] = useState([{image: "", price: 0}]);

    useEffect(() => {
        axios.get("http://localhost:8081/cart")
            .then(function (response) {
                console.log(response.data);
                setData(response.data)
              })
              .catch(function (error) {
                console.log(error);
              })
    }, []);

    console.log(dataArr[0].price)
            
    let totalPrice; 
    if(dataArr.length > 0) {
        const priceArr = []
        for(let i=0; i<dataArr.length; i++) {
            priceArr.push(dataArr[i].price)
        }
        totalPrice = priceArr.reduce((total, num)=>{
            return total + num;
        })
    }
            
    return (
        <section className="cart">
            <h2>CART</h2>
            <ul>
                {
                    dataArr.map((data) =>
                        { return <li key={data.productId}>
                            <figure>
                                <img src={data.image} alt={data.productName} />
                                <figcaption>
                                    <p>{data.productName}</p>
                                    <p>$ {data.price}</p>
                                    <label htmlFor="quantity">
                                        <input type="number" name="quantity" id="quantity" value="1" />
                                        <button id="changeQuantity">Change Quantity</button>
                                    </label>
                                    <button id="deleteItem">Delete</button>
                                </figcaption>
                            </figure>
                        </li> }
                    )
                }
            </ul>
            <p>TOTAL: $ {totalPrice}</p>
      </section>
    );
}
