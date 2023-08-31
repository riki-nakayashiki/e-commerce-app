import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Cart() {
    const [dataArr, setData] = useState([{image: "", price: 0}]);

    // GET cart data
    useEffect(() => {
        axios.get("http://localhost:8081/cart")
            .then(function (response) {
                setData(response.data)
              })
              .catch(function (error) {
                console.log(error);
              })
    }, []);
            
    // calculate total price
    let totalPrice; 
    if(dataArr.length > 0) {
        const priceArr = []
        for(let i=0; i<dataArr.length; i++) {
            priceArr.push(Number(dataArr[i].price))
        }
        totalPrice = priceArr.reduce((total, num)=>{
            return total + num;
        })
    }

    // DELETE item
    const deleteItem = (data) => {

        fetch('http://localhost:8081/cart', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => {
        console.log("response", response);
        })
        .then(data => {
        console.log("Check Data",data);
        })
        .catch(error => {
        console.error('Error adding todo:', error);
        });

        window.location.reload()
    }
            
    return (
        <section className="cart">
            <ul>
                {
                    dataArr.map((data) =>
                        { return <li key={data.productId}>
                            <figure>
                                <img src={data.image} alt={data.productName} />
                                <figcaption>
                                    <div>
                                        <p>{data.productName}</p>
                                        <span>$ {data.price}</span>
                                    </div>
                                    <div className='cart-quantity'>
                                        <label htmlFor="quantity">quantity</label>
                                        <input type="number" name="quantity" id="quantity" defaultValue="1" />
                                        <button id="changeQuantity">Change</button>
                                    </div>
                                    <button id="deleteItem" onClick={() => deleteItem(data)}><i class="fa-solid fa-trash-can"></i></button>
                                </figcaption>
                            </figure>
                        </li> }
                    )
                }
            </ul>
            <p><span>TOTAL</span> $ {totalPrice}</p>
            <button className='btn btn-primary'>Checkout</button>
      </section>
    );
}
