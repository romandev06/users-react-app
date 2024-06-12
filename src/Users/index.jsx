import React, { useState } from 'react'
import User from './User'
import Skeleton from './Skeleton'

export default function Users( {users, isLoading} ) {

    return (
        <section className='users-section'>
            <div className='input-wrapper'>
                <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                <input type="text" placeholder='Найти пользователя...' />
            </div>
            <ul>
                {isLoading && users.map(user => <li><User key={user.id} {...user}/></li>)}
                {!isLoading && (
                    <>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                    </>
                )}
            </ul>
            <button className='send-invite'>Отправить приглашение</button>
        </section>
    )
}
