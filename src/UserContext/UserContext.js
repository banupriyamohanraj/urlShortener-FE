import React, { useState } from 'react';

let UserContext = React.createContext();

export default UserContext;


export const UserProvider = ({children})=>{

    let [userlist,setuserlist] = useState([])
    let[userLoggedIn,setuserLoggedIn] = useState(false)
    return <UserContext.Provider value={{userlist,setuserlist,userLoggedIn,setuserLoggedIn}}>
        {children}
    </UserContext.Provider>
}