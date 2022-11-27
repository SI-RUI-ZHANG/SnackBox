import React from 'react';
import {Key} from "react";
import {DirectoryContainer} from './directory.styles'
import DirectoryItem from "../directory-item/directory-item.component";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
}

const categories = [
  {
    "id": 1,
    "title": 'Drinks',
    "imageUrl": "https://i.ibb.co/NNXVJmF/pepsi.webp",
    "route": "shop/drinks"
  },
  {
    "id": 2,
    "title": "Candies",
    "imageUrl": "https://i.ibb.co/DMqbC8h/MMs-Peanut-Chocolate-Candies-SIngle-Size.webp ",
    "route": "shop/candies"
  },
  {
    "id": 3,
    "title": "Chips",
    "imageUrl": "https://i.ibb.co/TtdYKvP/Doritos-Tortilla-Chips.webp",
    "route": "shop/chips"
  },
  {
    "id": 4,
    "title": "Cookies",
    "imageUrl": "https://i.ibb.co/7jx0y5P/Milk-Bar-Compost-Cookies.webp",
    "route": "shop/cookies"
  },
  {
    "id": 5,
    "title": "Fruits&Nuts",
    "imageUrl": "https://i.ibb.co/tKbGVYy/Woodstock-Origanic-Cut-Spinach.webp",
    "route": "shop/fruits&nuts"
  }
]

const Directory = () => {

    return (
      < DirectoryContainer>
        {
          categories.map((category) => (
            <DirectoryItem key={category.id} category={category}/>
          ))
        }
      </DirectoryContainer>
    )
  }
;

export default Directory;