import styled from "styled-components";
import {Link} from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0 2rem;
`

export const Title = styled(Link)`
  border: 2px solid #ff6666;;
  border-radius: .4rem;
  color: #ff6666;
  padding: .3rem;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  
  :hover {
    background-color: #ff6666;;
    color: white;
  }
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding-left: 1rem;
`
