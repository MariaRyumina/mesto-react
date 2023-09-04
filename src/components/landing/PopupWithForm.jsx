import React from 'react';

export default function PopupWithForm({ title, name, isOpen, onClose, children }) {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className={`popup popup_content_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" aria-label="Закрыть" type="button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_${name}`} name={name} onSubmit={handleSubmit} noValidate>
                    {children}
                </form>
            </div>
        </div>
    )
}