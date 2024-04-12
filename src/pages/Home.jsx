import React, { useContext, useState } from 'react';
import "./cssFile/Home.css"
import { formContext } from '../../UserContext';

const Home = () => {

  const { createUser } = useContext(formContext);

  const [userLength, setUserLength] = useState([...createUser])

  const userList = [];
  userList.push(createUser)
  return (
    <div id='loginContainer'>

      {/* <p id='LoginText'>LOGIN</p>

      <form action="">
        <div className='formData'>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className='formData'>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
        </div>

        <button>Login</button>
      </form> */}

      <div>
        <h3>Users: </h3>
        <p>{userList.length}</p>
      </div>

    </div>
  )
}

export default Home
