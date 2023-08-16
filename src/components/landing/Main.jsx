import '../../index.css';
import React from 'react';

export default function Main({ onEditAvatar, onEditProfile, onAddCard }) {
    // const [userAvatar, setUserAvatar] = React.useState("")
    // const [username, setUsername] = React.useState("")
    // const [aboutUser, setAboutUser] = React.useState("")
    //
    // React.useEffect(() => {
    //     setAboutUser("что то о пользователе")
    //     setUsername("Мария")
    //     setUserAvatar("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meme-arsenal.com%2Fcreate%2Ftemplate%2F6954747&psig=AOvVaw2ll4o-yMBiW1aEkWxTrqDf&ust=1692126834558000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKDY5Ojt3IADFQAAAAAdAAAAABAE")
    // })

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-group">
                    <img alt="аватар" className="profile__avatar" />
                    <div className="profile__avatar-cover">
                        <button className="profile__avatar-edit" type="button" onClick={onEditAvatar} />
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button className="profile__button-edit" type="button" onClick={onEditProfile} />
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button className="profile__button-add" type="button" onClick={onAddCard} />
            </section>
            <section className="elements">

            </section>
        </main>
    )
}

