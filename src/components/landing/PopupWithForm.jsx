import React from 'react';

export default function PopupWithForm(props) {
    const {title, name, isOpen, onClose, children} = props;

    return(
        <div className={`popup popup_content_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" aria-label="Закрыть" type="button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_${name}`} name={name} noValidate>
                    {children}
                </form>
            </div>
        </div>
    )
}