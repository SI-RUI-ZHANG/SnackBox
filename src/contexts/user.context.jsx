import {createContext, useEffect, useState} from 'react'

import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    // unsubscribe when it unmounts
    return onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // this state change will cause react to rerender this component
      // therefore rerender its child component
      setCurrentUser(user)
    })
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


