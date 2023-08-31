import ItemList from "./ItemList.jsx";
import ItemFilter from "./ItemFilter.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Items() {
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

  function getGender(e) {
    let filteredList = itemList.filter(function (item) {
      return item.gender == e.target.value;
    });
    setData(filteredList);
  }
    
  function getCategory(e) {
    let filteredList = itemList.filter(function (item) {
      return item.category == e.target.value;
    });
    setData(filteredList);
  }

  if (itemList.length != 0) {
    return (
      <section className="items">
        <section className="item-filter">
          <select id="gender-select" onChange={getGender}>
            <option value={""}>Gender</option>
            <option value={"Boys"}>Boys</option>
            <option value={"Girls"}>Girls</option>
            <option value={"Men"}>Men</option>
            <option value={"Women"}>Women</option>
            <option value={"Unisex"}>Unisex</option>
          </select>
          <select id="category-select" onChange={getCategory}>
            <option value={""}>Category</option>
            <option value={"Accessories"}>Accessories</option>
            <option value={"Topwear"}>Topwear</option>
            <option value={"Bottomwear"}>Bottomwear</option>
            <option value={"Shoes"}>Shoes</option>
          </select>
        </section>
        <ItemList itemList={itemList} />
      </section>
    );
  }
}
