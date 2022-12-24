function Card(props) {
  return (
    <li className="gallery__list-element">
      <article className="gallery__item">
        <img className="gallery__photo" alt="" src={props.card.link} />
        <button className="gallery__trash" type="button"></button>
        <div className="gallery__cover">
          <h2 className="gallery__name">{props.card.name}</h2>
          <div className="gallery__like-container">
            <button className="gallery__like-btn" type="button"></button>
            <span className="gallery__like-count">{props.card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;
