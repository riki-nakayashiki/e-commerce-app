import ItemCard from "./ItemCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ItemList() {
  const [itemList, setData] = useState([]);
  const [countPage, setCountPage] = useState(0);

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

  if (itemList.length != 0) {
    let itemListForPagination = sliceByNumber(itemList, 9);

    // countPage for pagination
    function increment() {
      if (countPage < itemListForPagination.length - 1)
        setCountPage(countPage + 1);
    }

    function decrement() {
      if (countPage != 0) setCountPage(countPage - 1);
    }

    return (
      <section className="item-list">
        <section className="item-cards">
          {itemListForPagination[countPage].map((item) => {
            return <ItemCard key={item.productId} item={item} />;
          })}
        </section>
        <section className="pagination">
          <button className="btn btn-light" onClick={decrement}>
            ◀︎ previous
          </button>
          <button className="btn btn-light" onClick={increment}>
            next ▶︎
          </button>
        </section>
      </section>
    );
  }
}

// setCountPage(1);
// console.log(countPage);

// function makePaginateList(itemList) {
//   let itemListForPaginate = [];
//   let itemObjForPaginate = [];
//   let countPage = 0;
//   // console.log(itemList);
//   itemList.map((item) => {
//     itemObjForPaginate.push(item);
//     countPage++;
//     console.log(itemObjForPaginate);
//     if (countPage == 3) {
//       countPage = 0;
//       itemListForPaginate.push(itemObjForPaginate);
//       itemObjForPaginate = [];
//     }
//   });
//   console.log(itemListForPaginate);

//   return itemListForPaginate;
// }

const sliceByNumber = (array, number) => {
  const length = Math.ceil(array.length / number);
  return new Array(length)
    .fill()
    .map((_, i) => array.slice(i * number, (i + 1) * number));
};
