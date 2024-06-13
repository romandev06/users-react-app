import React from 'react'

export default function Result({ invites }) {
    return (
        <section className='result-section'>
            <div className='result-section__inner'>
                <img src="/img/success.svg" alt="" />
                <h2>Успешно!</h2>
                <p>Всем {invites} пользователям отправлено приглашение</p>
                <button onClick={() => window.location.reload()} className='result-btn'>Назад</button>
            </div>
        </section>
    )
}
