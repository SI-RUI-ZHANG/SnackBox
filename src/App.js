import {useEffect} from 'react'
import {useDispatch} from "react-redux";

import {Routes, Route} from "react-router-dom";

import {
  createUserDocumentFromAuth, getCategoriesAndDocuments,
  onAuthStateChangedListener
} from "./utils/firebase/firebase.utils";
import Home from "./routes/home/home.component";
import Navigation from "./routes/nagivation/navigation.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import {setCurrentUser} from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // unsubscribe when it unmounts
    const unsubscrib = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // this state change will cause react to rerender this component
      // therefore rerender its child component
      dispatch(setCurrentUser(user))
    })

    return unsubscrib
  }, [])

  return (
    <Routes>
      <Route path={'/'} element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path={'shop/*'} element={<Shop/>}/>
        <Route path={'auth'} element={<AuthenticationComponent/>}/>
        <Route path={'checkout'} element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App;
