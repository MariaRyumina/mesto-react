import React from 'react';
import Header from './landing/Header.jsx';
import Main from './landing/Main.jsx';
import Footer from './landing/Footer.jsx';
import '../index.css';
import PopupWithForm from "./landing/PopupWithForm";
import ImagePopup from "./landing/ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./landing/EditProfilePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [statePopupDeleteCard, setStatePopupDeleteCard] = React.useState({isOpen : false, card: {}});
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(resultUser => setCurrentUser(resultUser))
            .catch(err => console.log(`Ошибка загрузки данных о пользователе с сервера: ${err}`))
    })

    React.useEffect(() => {
        api.getCardList()
            .then((resultCard) => {
                setCards(resultCard);
            })
            .catch(err => console.log(`Ошибка загрузки карточек с сервера: ${err}`))
    }, [])

    function handleUpdateUser({ name, about }) {
        api.patchUserInfo({ name, about })
            .then(resultUser => setCurrentUser(resultUser))
            .catch(err => console.log(`Ошибка отправки данных о пользователе на сервер: ${err}`))
    }

    //лайк/дизлайк карточки
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked)
            .then(newCard => {
                setCards(state => state.map(c => c._id === card._id ? newCard : c))
            })
            .catch(err => console.log(`Ошибка поддержки лайков/дизлайков: ${err}`))
    }

    //удаление карточки
    function handleCardDelete() {
        api.deleteCard(statePopupDeleteCard.card._id)
            .then(() => setCards(card => cards.filter(c => c._id !== card._id)))
            .then(() => closeAllPopups())
            .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
    }

    function handleEditAvatarClick() { //открытие попапа редактирования аватара
        setIsEditAvatarPopupOpen(true)
    }
    function handleEditProfileClick() { //открытие попапа редактирования профиля
        setIsEditProfilePopupOpen(true)
    }
    function handleAddCardClick() { //открытие попапа добавления новой карточки
        setIsAddCardPopupOpen(true)
    }

    //открытие попапа подтверждения удаления карточки
    function handleConfirmDeleteCardClick(currentCard) {
        setStatePopupDeleteCard({ isOpen: true, card: currentCard })
    }
    function handleCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddCardPopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setStatePopupDeleteCard({isOpen: false, card: {}})
        setSelectedCard({})
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddCard={handleAddCardClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onConfirmDeleteCard={handleConfirmDeleteCardClick}
                    onCardLike={handleCardLike}
                    cards={cards}
                />
                <Footer />

                <PopupWithForm
                    title="Вы уверены?"
                    name="delete"
                    isOpen={statePopupDeleteCard.isOpen}
                    onClose={closeAllPopups}
                >
                    <button className="popup__button popup__button_delete" type="submit" onClick={handleCardDelete}>Да</button>
                </PopupWithForm>

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />

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
        </CurrentUserContext.Provider>

    );
}

export default App;
