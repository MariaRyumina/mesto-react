import React from 'react';

export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element" key={props.card._id}>
            <button className="element__delete" aria-label="Удалить" type="button" />
            <img alt={props.card.name} className="element__img" src={props.card.link} onClick={handleClick} />
            <div className="element__container">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like-group">
                    <button className="element__like" aria-label="Нравится" type="button" />
                    <p className="element__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}