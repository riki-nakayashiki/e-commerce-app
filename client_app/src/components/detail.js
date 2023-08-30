import '../style/detail.css';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

function Detail(){
    const [dataArr, setData] = useState([]);
    const [headerArr, setHeader] = useState([]);

    // Using AXIOS
    useEffect(() => {
        axios.get("http://localhost:8081/data")
            .then(function (response) {
                // console.log(response.data);
                 setData(response.data)
                 setHeader(response.data[0])
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    // Making response data to JSON Object
  const jsonObj = [];
  for(let i = 1; i < dataArr.length; i++) {
    const obj = {};
    for(let j = 0; j < headerArr.length; j++) {
      obj[headerArr[j]] = dataArr[i][j];
    }
    jsonObj.push(obj);
  }
  JSON.stringify(jsonObj);

  console.log(jsonObj);

    return(
        <div className='detail'>
            <div className='product-img'>
                <img src="http://assets.myntassets.com/v1/images/style/properties/7b661983ddd630db69f2847a53e25704_images.jpg"></img>
            </div>
            <div className='product-detail'>
                <small>Topwear</small>
                <h2>(name)Reebok Women Boat-Neck Wildberry Sweatshirt</h2>
                <p>(type)Sweatshirts</p>
                <p>(price)$344</p>
                <p>(color)Pink</p>

                <button>Add to Cart</button>
            </div>           
        </div>
    )
}
export default Detail;