import ItemList from "./ItemList.jsx";
import ItemFilter from "./ItemFilter.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Items() {
  const [itemList, setData] = useState([]);
  const [NonFiltereditemList, setDataNoFilter] = useState([]);

  // Using AXIOS
  useEffect(() => {
    axios
      .get("http://localhost:8081/data")
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
        setDataNoFilter(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // Filter functions
  function getGender(e) {
    document.querySelector("#gender-select").disabled = true;
    let filteredList = itemList.filter(function (item) {
      return item.gender == e.target.value;
    });
    setData(filteredList);
  }

  function getCategory(e) {
    document.querySelector("#category-select").disabled = true;
    let filteredList = itemList.filter(function (item) {
      return item.category == e.target.value;
    });
    setData(filteredList);
  }

  function removeFilter() {
    document.querySelector("#gender-select").disabled = false;
    document.querySelector("#category-select").disabled = false;
    setData(NonFiltereditemList);
  }

  if (itemList.length != 0) {
    return (
      <section className="items">
        {/* Filter */}
        <form className="item-filter">
          <select
            id="gender-select"
            onChange={getGender}
            defaultValue={"Gender"}
          >
            <option value={"Gender"} disabled>
              Gender
            </option>
            <option value={"Boys"}>Boys</option>
            <option value={"Girls"}>Girls</option>
            <option value={"Men"}>Men</option>
            <option value={"Women"}>Women</option>
            <option value={"Unisex"}>Unisex</option>
          </select>
          <select
            id="category-select"
            onChange={getCategory}
            defaultValue={"Category"}
          >
            <option value={"Category"} disabled>
              Category
            </option>
            <option value={"Accessories"}>Accessories</option>
            <option value={"Topwear"}>Topwear</option>
            <option value={"Bottomwear"}>Bottomwear</option>
            <option value={"Shoes"}>Shoes</option>
          </select>
          <button
            type="reset"
            className="btn btn-secondary"
            onClick={removeFilter}
          >
            Remove filter
          </button>
        </form>

        {/* Item list */}
        <ItemList itemList={itemList} />
      </section>
    );
  }
}
