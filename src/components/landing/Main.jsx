import '../../index.css';
import React from 'react';
import {api} from "../../utils/Api";
import Card from "./Card";

export default function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [userAbout, setUserAbout] = React.useState("");
    const [cards, setCards] = React.useState([]);

    const {onEditProfile, onAddCard, onEditAvatar, onCardClick, onDeleteCard} = props;

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCardList()])

            .then(([resultUser, resultCard]) => {
                setUserName(resultUser.name);
                setUserAbout(resultUser.about);
                setUserAvatar(resultUser.avatar);

                setCards(resultCard);
            })

            .catch(err => console.log(`Ошибка загрузки данных с сервера: ${err}`))
    }, [])

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-group">
                    <img alt="аватар" className="profile__avatar" src={userAvatar} />
                    <div className="profile__avatar-cover">
                        <button className="profile__avatar-edit" type="button" onClick={onEditAvatar} />
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__button-edit" type="button" onClick={onEditProfile} />
                    <p className="profile__subtitle">{userAbout}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={onAddCard} />
            </section>
            <section className="elements">
                {cards.map(card => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        onDeleteCard={onDeleteCard}
                    />
                ))}
            </section>
        </main>
    )
}
