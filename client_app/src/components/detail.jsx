// import '../style/detail.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

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
        alert("ADDED!")
    }

    let result = jsonObj.find(item => item.productId === id)
    console.log(result)

if (jsonObj.length > 0) {
    return(
        <div>
            <Header/>
            <div className='detail'>
                <div className='product-img'>
                    <img src={result.image}></img>
                </div>
                <div className='product-detail'>
                    <small>{result.category}</small>
                    <h2>{result.productName}</h2>
                    <p>TYPE : {result.type}</p>
                    <p >PRICE : ${result.price}</p>
                    <p>COLOR : {result.baseColor}</p>

                    <button onClick={() => addItem(result)}>Add to Cart</button>
                </div>
             </div>
             <Footer/>
        </div>

    )
}

   
}