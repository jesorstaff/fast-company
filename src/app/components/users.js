import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers((prevState => prevState.filter(user => user._id !== userId)))
  }

  const renderPhrase = (number) => {
    if (number > 0) {
      if (number === 2 || number === 3 || number === 4) {
        return (
          <span className="badge bg-primary">{number} человека тусанут с тобой сегодня</span>
        )
      } else {
        return (
          <span className="badge bg-primary">{number} человек тусанет с тобой сегодня</span>
        )
      }
    } else {
      return (
        <span className="badge btn-danger">Никто с тобой не тусанет</span>
      )
    }
  }

  const Table = () => {
    if (users.length !== 0) {
      return (
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          {
            users.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  {item.qualities.map((element) => (
                    <span key={element._id} className={`badge bg-${element.color} me-1`}>{element.name}</span>
                  ))}
                </td>
                <td>{item.profession.name}</td>
                <td>{item.completedMeetings}</td>
                <td>{item.rate}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => {handleDelete(item._id)}}>delete</button></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      )
    }
  }

  return (
    <>
      <h2>
        {renderPhrase(users.length)}
      </h2>
      <Table/>
    </>
  )
}

export default Users