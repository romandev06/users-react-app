import { useEffect, useState } from 'react'
import './App.css'
import Users from './Users'
import Result from './Users/Result'


// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [success, setSuccess] = useState(false)

  const [invites, setInvites] = useState([])


  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(data => setUsers(data.data))
      .catch(err => console.log(err))
      .finally(setIsLoading(true))
  }, [])


  const onClickSendInvite = () => {
    setSuccess(true)
  }


  const onclickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(item => item !== id))
    } else {
      setInvites(prev => [...prev, id])
    }
  }


  return (
    <section>
      {!success && <Users users={users} isLoading={isLoading} onClickSendInvite={onClickSendInvite} onclickInvite={onclickInvite} invites={invites} />}
      {success && <Result invites={invites.length} />}
    </section>
  )
}

export default App
