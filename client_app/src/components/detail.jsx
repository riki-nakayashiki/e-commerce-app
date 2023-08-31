import '../style/detail.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';

export default function Detail(){
    const [jsonObj, setData] = useState([]);
    const {id} = useParams();

    // Using AXIOS
    useEffect(() => {
        axios.get("http://localhost:8081/data")
            .then(function (response) {
                // console.log(response.data);
                 setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const addItem = (data) => {

        fetch('http://localhost:8081/cart', {
        method: 'POST',
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

if (jsonObj.length > 0) {
    return(

        <div className='detail'>
            <div className='product-img'>
                <img src={jsonObj[id].image}></img>
            </div>
            <div className='product-detail'>
                <small>{jsonObj[id].category}</small>
                <h2>{jsonObj[id].productName}</h2>
                <p>TYPE : {jsonObj[id].type}</p>
                <p >PRICE : ${jsonObj[id].price}</p>
                <p>COLOR : {jsonObj[id].baseColor}</p>

                <button onClick={() => addItem(jsonObj[id])}>Add to Cart</button>
            </div>
        </div>
    )
}

   
}