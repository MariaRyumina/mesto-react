import '../../index.css';
import React from 'react';
import {api} from "../../utils/Api";
import Card from "./Card";

export default function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [userAbout, setUserAbout] = React.useState("")
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserName(res.name);
                setUserAbout(res.about);
                setUserAvatar(res.avatar)
            })
            .catch(err => console.log(`Ошибка загрузки данных о пользователе с сервера: ${err}`))
    }, [])

    React.useEffect(() => {
        api.getCardList()
            .then(res => {
                setCards(res)
            })
            .catch(err => console.log(`Ошибка загрузки карточек с сервера: ${err}`))
    }, [])

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-group">
                    <img alt="аватар" className="profile__avatar" src={userAvatar} />
                    <div className="profile__avatar-cover">
                        <button className="profile__avatar-edit" type="button" onClick={props.onEditAvatar} />
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__button-edit" type="button" onClick={props.onEditProfile} />
                    <p className="profile__subtitle">{userAbout}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddCard} />
            </section>
            <section className="elements">
                {cards.map(card => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                        onDeleteCard={props.onDeleteCard}
                    />
                ))}
            </section>
        </main>
    )
}
