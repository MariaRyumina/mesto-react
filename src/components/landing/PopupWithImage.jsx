import React from 'react';

export default function PopupWithImage(props) {
    return(
        <>
            <div className={`popup popup_content_image ${props.isOpen ? 'popup_opened' : ''}`}>
                <figure className="popup__image">
                    <button className="popup__close" aria-label="Закрыть" type="button" onClick={props.onClose} />
                    <img alt={props.card.name} src={props.card.link} className="popup__img" />
                    <figcaption className="popup__img-caption">{props.card.name}</figcaption>
                </figure>
            </div>
        </>
    )
}