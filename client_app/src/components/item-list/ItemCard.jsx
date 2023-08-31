export default function ItemCard(props) {
  return (
    <section className="item-card">
      <figure>
        <img src={props.item[9]} alt="pic" />
        <figcaption>
          <div className="item-category">{props.item[2]}</div>
          <div className="item-name">{props.item[5]}</div>
          <div className="item-price">${props.item[6]}</div>
        </figcaption>
        <a href={`/detail/${props.dataId}`} className="btn btn-primary">
          See detail
        </a>
      </figure>
    </section>
  );
}
