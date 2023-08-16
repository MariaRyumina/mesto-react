import React from 'react';
import Header from './landing/Header.jsx';
import Main from './landing/Main.jsx';
import Footer from './landing/Footer.jsx';
import '../index.css';
import PopupWithForm from "./landing/PopupWithForm";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)

    }

    function handleAddCardClick() {
        setIsAddCardPopupOpen(true)
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile = {handleEditProfileClick}
                onAddCard = {handleAddCardClick}
                onEditAvatar = {handleEditAvatarClick}
            />
            <Footer />
            <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} >
                <input id="name" className="popup__input popup__input_value_name" type="text" placeholder="Имя" name="name"
                       minLength="2" maxLength="40" required />
                <span id="name-error" className="popup__input-error" />
                <input id="about" className="popup__input popup__input_value_about" type="text" placeholder="О себе"
                       name="about" minLength="2" maxLength="200" required />
                <span id="about-error" className="popup__input-error" />
                <button className="popup__button popup__button_edit" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm title="Новое место" name="add" isOpen={isAddCardPopupOpen} >
                <input id="title" className="popup__input popup__input_value_title" type="text" placeholder="Название"
                       name="name" minLength="2" maxLength="30" required />
                <span id="title-error" className="popup__input-error" />
                <input id="link" className="popup__input popup__input_value_link" type="url"
                           placeholder="Ссылка на картинку" name="link" required />
                <span id="link-error" className="popup__input-error" />
                <button className="popup__button popup__button_add" type="submit">Создать</button>
            </PopupWithForm>

            <PopupWithForm title="Вы уверены?" name="delete" >
                <button className="popup__button popup__button_delete" type="submit">Да</button>
            </PopupWithForm>

            <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} >
                <input id="link-avatar" className="popup__input popup__input_value_link" type="url"
                       placeholder="Ссылка на картинку" name="avatar" required />
                <span id="link-avatar-error" className="popup__input-error" />
                <button className="popup__button popup__button_edit-avatar" type="submit">Сохранить</button>
            </PopupWithForm>

            <div className="popup popup_content_image">
                <figure className="popup__image">
                    <button className="popup__close" aria-label="Закрыть" type="button"></button>
                    <img alt="" className="popup__img" />
                    <figcaption className="popup__img-caption"></figcaption>
                </figure>
            </div>

            <template id="elements">
                <article className="element">
                    <button className="element__delete" aria-label="Удалить" type="button"></button>
                    <img alt="" className="element__img" />
                    <div className="element__container">
                        <h2 className="element__title"></h2>
                        <div className="element__like-group">
                            <button className="element__like" aria-label="Нравится" type="button"></button>
                            <p className="element__like-count">0</p>
                        </div>
                    </div>
                </article>
            </template>

        </div>
    );
}

export default App;