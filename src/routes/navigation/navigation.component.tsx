import {Fragment} from "react";
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as SnackBox} from "../../assets/SnackBox.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from "./navigation.styles"
import {signOutStart} from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => dispatch(signOutStart())

  return (
    <Fragment>
      <NavigationContainer>

        <NavLinks>
          <LogoContainer to={'/'}><SnackBox className={'logo'}/></LogoContainer>
          <NavLink to={'/shop'}>SHOP</NavLink>

          {currentUser ?
            (<NavLink as={'span'} onClick={signOutUser}>
              SIGN OUT
            </NavLink>)
            : (<NavLink to={'/auth'}>
                SIGN IN
              </NavLink>
            )}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
)
}

export default Navigation;
