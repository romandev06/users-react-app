import { useEffect, useState } from 'react'
import './App.css'
import Users from './Users'
import Result from './Users/Result'


// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(data => setUsers(data.data))
      .catch(err => console.log(err))
      .finally(setIsLoading(true))
  }, [])

  return (
    <section>
      <Users isLoading={isLoading} users={users} />
    </section>
  )
}

export default App
