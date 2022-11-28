import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavigationContainer = styled.div`
  padding: 1rem;
  border-bottom: 6px double #ff6666;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  margin-right: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: initial;
  justify-items: initial;
`

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  font-weight: bold;
  color: #ff6666;
  margin-right: .5rem;
  padding: 10px 15px;
  cursor: pointer;
  border: 2px solid #ff6666;
  border-radius: .5rem;

  :hover {
    background-color: #ff6666;
    color: white;
  }
`

