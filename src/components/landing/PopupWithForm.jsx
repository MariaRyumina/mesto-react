import React from 'react';

export default function PopupWithForm(props) {
    return(
        <>
            <div className={`popup popup_content_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <button className="popup__close" aria-label="Закрыть" type="button"></button>
                    <h2 className="popup__title">{props.title}</h2>
                    <form className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
                        {props.children}
                    </form>
                </div>
            </div>
        </>
    )
}
