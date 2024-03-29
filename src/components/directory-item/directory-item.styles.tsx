import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: white;
  opacity: 0.9;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #3a3939;
    text-transform: uppercase;
  }

  p {
    font-weight: normal;
    font-size: 16px;
  }
`

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 250px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px dotted #ff6666;
  border-radius: 1rem;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`