import ItemCard from "./ItemCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ItemList(props) {
  const itemList = props.itemList;
  const [countPage, setCountPage] = useState(0);

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
        {itemListForPagination[countPage].map((item, i) => {
          return <ItemCard key={item.productId} item={item} dataId={i}/>;
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

function sliceByNumber(array, number) {
  const length = Math.ceil(array.length / number);
  return new Array(length)
    .fill()
    .map((_, i) => array.slice(i * number, (i + 1) * number));
}
