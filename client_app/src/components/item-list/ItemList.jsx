import ItemCard from "./ItemCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ItemList() {
  const [itemList, setData] = useState([]);

  // Using AXIOS
  useEffect(() => {
    axios
      .get("http://localhost:8081/data")
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="item-list">
      {itemList.map((item) => {
        if (item[0] !== "productId") {
          return <ItemCard key={item[0]} item={item} />;
        }
      })}
    </section>
  );
}
