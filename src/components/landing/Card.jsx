import React from 'react';

export default function Card(props) {
    const {card, onCardClick, onDeleteCard} = props;
    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="element">
            <button className="element__delete" aria-label="Удалить" type="button" onClick={onDeleteCard} />
            <img alt={card.name} className="element__img" src={card.link} onClick={handleClick} />
            <div className="element__container">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-group">
                    <button className="element__like" aria-label="Нравится" type="button" />
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}