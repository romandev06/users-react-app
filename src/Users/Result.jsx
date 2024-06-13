import React from 'react'

export default function Result() {
    return (
        <section className='result-section'>
            <div className='result-section__inner'>
                <img src="/img/success.svg" alt="" />
                <h2>Успешно!</h2>
                <p>Всем 6 пользователям отправлено приглашение</p>
                <button className='result-btn'>Назад</button>
            </div>
        </section>
    )
}
