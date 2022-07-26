import {Routes, Route, Outlet} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/nagivation/navigation.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1>This is shop component</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path={'/shop'} element={<Shop/>}/>
        <Route path={'/auth'} element={<AuthenticationComponent/>}/>
      </Route>
    </Routes>
  )
}

export default App;
