import React from 'react'
import Skeleton from './Skeleton'

export default function User( {id, first_name, last_name, email, avatar} ) {
    return (
        <section className='user-section'>
            <li>
                <div className='user-wrapper'>
                    <img className='avatar-icon' src={avatar} alt="" />
                    <div>
                        <p>{first_name} {last_name}</p>
                        <p className='email-container'>
                            <svg className='email-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" /></svg>
                            {email}
                        </p>
                    </div>
                    <img className='add-user-icon' src="img/plus.svg" alt="" />
                </div>
            </li>
        </section>
    )
}
