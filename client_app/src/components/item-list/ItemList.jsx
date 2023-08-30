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

  // console.log(itemList);

  return (
    <section className="item-list">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      {/* {itemList.map((item) => {
        console.log(item[1]);
        return <p key={item.productName}>{item.productName}</p>;
      })} */}
    </section>
  );
}

// let items = [
//   { productName: "Reebok Men trackpant- male Track Pants", price: 900 },
//   { productName: "Nike Men Air Zoom Century Shoes", price: 111 },
//   { productName: "Inkfruit Men Night Wolf T-shirt", price: 222 },
// ];
