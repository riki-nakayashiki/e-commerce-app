export default function ItemCard(props) {
  return (
    <section className="item-card">
      <figure>
        <img src={props.item.image} alt="pic" />
        <figcaption>
          <div className="item-category">{props.item.category}</div>
          <div className="item-gender">#{props.item.gender}</div>
          <div className="item-name">{props.item.productName}</div>
          <div className="item-price">${props.item.price}</div>
        </figcaption>
        <a href={`/detail/${props.dataId}`} className="btn btn-primary">
          See detail
        </a>
      </figure>
    </section>
  );
}
