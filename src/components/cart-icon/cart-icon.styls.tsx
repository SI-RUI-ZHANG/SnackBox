import styled from "styled-components";

export const CartIconContainer = styled.div`
  border: 2px solid #ff6666;
  border-radius: .5rem;
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  :hover {
    background-color: #ff6666;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
