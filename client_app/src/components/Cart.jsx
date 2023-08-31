import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Cart() {
    const [dataArr, setData] = useState([{image: "", price: 0}]);

    useEffect(() => {
        axios.get("http://localhost:8081/cart")
            .then(function (response) {
                // console.log(response.data);
                setData(response.data)
              })
              .catch(function (error) {
                console.log(error);
              })
    }, []);
            
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

    const deleteItem = (data) => {
        console.log(dataArr.indexOf(data))
        // console.log(data)

        // axios.delete("http://localhost:8081/cart", data)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })

        const newEvent = {
            id: data.productId,
            eventday: "showDate",
            detail: data.productId
        }

        fetch('http://localhost:8081/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
        })
        .then(response => {
        console.log("response", response);
        if (!response.ok) {
            throw new Error('EVENT response was not ok');
        }
        return response.json();
        })
        .then(data => {
        console.log("Check Data",data);
        })
        .catch(error => {
        // console.error('Error adding todo:', error);
        });

    }
            
    return (
        <section className="cart">
            <h3>CART</h3>
            <ul>
                {
                    dataArr.map((data) =>
                        { return <li key={data.productId}>
                            <figure>
                                <img src={data.image} alt={data.productName} />
                                <figcaption>
                                    <p>{data.productName}</p>
                                    <p>$ {data.price}</p>
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
            <p>TOTAL: $ {totalPrice}</p>
      </section>
    );
}
