import React from 'react'
import { FavouritesList, FavouritesListItem } from './UI/Favourites'

const Documents = props => (
  <FavouritesList title={props.title}>
    {props.data.map(item => (
      <FavouritesListItem key={item.name}>{item.name}</FavouritesListItem>
    ))}
  </FavouritesList>
)

export default Documents
