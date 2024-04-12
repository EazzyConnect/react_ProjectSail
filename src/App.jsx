import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import UserContext from '../UserContext';


const App = () => {
  return (
    <div>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </div>
  )
};

export default App;
