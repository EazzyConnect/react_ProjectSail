import React, { createContext, useState } from 'react';

export const formContext = createContext()


const UserContext = ({ children }) => {

    const [createUser, setCreateUser] = useState([{
        email: "",
        password: "",
        imgUrl: ""
    }]);

    const userList = [];
    userList.push(createUser)

    const updateUser = (data) => {
        setCreateUser(data)
    }

    return (
        <>
            <formContext.Provider value={{ createUser, updateUser }}>
                {children}
            </formContext.Provider>

        </>
    )
}

export default UserContext
