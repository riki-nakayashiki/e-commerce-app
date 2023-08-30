import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

export default function PersonList() {
  
  const [dataArr, setData] = useState([]);

  // Using AXIOS
  useEffect(() => {
    axios.get("http://localhost:8081/data")
        .then(function (response) {
            console.log(response.data);
            setData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
  }, []);

  // Using FETCH
  // useEffect(() => {
  //   fetch("http://localhost:8081/data")
  //   .then((res) => res.json())
  //   .then((data) => setData(data));
  // }, []);

  console.log(dataArr);

  return (
    <ul>
      {
        dataArr.map((data) =>
            {return <li key={data.username}>{data.username}</li>}
        )
      }
    </ul>
  )
}