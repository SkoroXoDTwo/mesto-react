function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={`popup_${props.name}`}
    >
      <div className="popup__container">
        <button className="popup__close-btn" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}-form`} noValidate>
          {props.children}
          <button className="popup__save-btn" type="submit">
            {props.btnName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
