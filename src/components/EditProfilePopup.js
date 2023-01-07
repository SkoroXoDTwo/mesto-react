import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      btnName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input"
        id="name-profile-input"
        name="user-name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error" id="name-profile-input-error"></span>

      <input
        className="popup__input"
        id="about-profile-input"
        name="user-about"
        placeholder="Место работы"
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className="popup__input-error"
        id="about-profile-input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
