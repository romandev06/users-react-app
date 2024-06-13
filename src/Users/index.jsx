import React, { useState } from 'react'
import User from './User'
import Skeleton from './Skeleton'
import useInput from '../hooks/useInput'
import Result from './Result'

export default function Users( {users, isLoading, onClickSendInvite, onclickInvite, invites} ) {

    const input = useInput('')

    return (
        <section className='users-section'>
            <div className='input-wrapper'>
                <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                <input {...input} type="text" placeholder='Найти пользователя...' />
            </div>
            <ul>
                {isLoading ? users.filter(user => {
                    const fullName = user.first_name.toLowerCase().includes(input.value.toLowerCase()) || user.last_name.toLowerCase().includes(input.value.toLowerCase())
                    const email = user.email.toLowerCase().includes(input.value.toLowerCase())

                    return fullName || email
                }).map(user => <li><User key={user.id} onclickInvite={onclickInvite} isInvited={invites.includes(user.id)} {...user}/></li>)
            : (
                <>
                    <Skeleton />
                    <Skeleton/>
                    <Skeleton/>
                </>
            )}
            </ul>
            <button onClick={onClickSendInvite} className={`${invites.length === 0 ? 'send-invite disabled-btn-invite' : 'send-invite'}`}>Отправить приглашение</button>
            <p style={{position: 'absolute', bottom: '20px', right: '-110px'}}>{invites.length}</p>
        </section>
    )
}
