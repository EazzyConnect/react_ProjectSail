import React, { useContext } from 'react';
import { formContext } from '../../UserContext';


const User = () => {

const {createUser} = useContext(formContext)

  return (
    <div>
      <p>User</p>
      <pre>{JSON.stringify(createUser)}</pre>
    </div>
  )
}

export default User
