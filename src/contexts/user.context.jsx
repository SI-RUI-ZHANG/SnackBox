import {createContext, useEffect, useReducer} from 'react'

import {createAction} from "../utils/reducer/reducer.utils";

import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state, action) => {
  const {type, payload} = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type ${type}`)
  }
}

export const UserProvider = ({children}) => {
  // const [currentUser, setCurrentUser] = useState(null)

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const {currentUser} = state

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }

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

  const value = {
    currentUser,
    setCurrentUser
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
