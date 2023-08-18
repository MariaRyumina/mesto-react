import React from 'react';
import Header from './landing/Header.jsx';
import Main from './landing/Main.jsx';
import Footer from './landing/Footer.jsx';
import '../index.css';
import PopupWithForm from "./landing/PopupWithForm";
import ImagePopup from "./landing/ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState({})

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    function handleAddCardClick() {
        setIsAddCardPopupOpen(true)
    }
    function handleDeleteCardClick() {
        setIsDeleteCardPopupOpen(true)
    }
    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddCardPopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsDeleteCardPopupOpen(false)
        setSelectedCard({})
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile = {handleEditProfileClick}
                onAddCard = {handleAddCardClick}
                onEditAvatar = {handleEditAvatarClick}
                onCardClick = {handleCardClick}
                onDeleteCard = {handleDeleteCardClick}
            />
            <Footer />
            <PopupWithForm
                title="Редактировать профиль"
                name="edit"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <input id="name" className="popup__input popup__input_value_name" type="text" placeholder="Имя" name="name"
                       minLength="2" maxLength="40" required />
                <span id="name-error" className="popup__input-error" />
                <input id="about" className="popup__input popup__input_value_about" type="text" placeholder="О себе"
                       name="about" minLength="2" maxLength="200" required />
                <span id="about-error" className="popup__input-error" />
                <button className="popup__button popup__button_edit" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm
                title="Новое место"
                name="add"
                isOpen={isAddCardPopupOpen}
                onClose={closeAllPopups}
            >
                <input id="title" className="popup__input popup__input_value_title" type="text" placeholder="Название"
                       name="name" minLength="2" maxLength="30" required />
                <span id="title-error" className="popup__input-error" />
                <input id="link" className="popup__input popup__input_value_link" type="url"
                           placeholder="Ссылка на картинку" name="link" required />
                <span id="link-error" className="popup__input-error" />
                <button className="popup__button popup__button_add" type="submit">Создать</button>
            </PopupWithForm>

            <PopupWithForm
                title="Вы уверены?"
                name="delete"
                isOpen={isDeleteCardPopupOpen}
                onClose={closeAllPopups}
            >
                <button className="popup__button popup__button_delete" type="submit">Да</button>
            </PopupWithForm>

            <PopupWithForm
                title="Обновить аватар"
                name="edit-avatar"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input id="link-avatar" className="popup__input popup__input_value_link" type="url"
                       placeholder="Ссылка на картинку" name="avatar" required />
                <span id="link-avatar-error" className="popup__input-error" />
                <button className="popup__button popup__button_edit-avatar" type="submit">Сохранить</button>
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                isOpen={!!selectedCard.name}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;
