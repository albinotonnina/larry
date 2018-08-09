import React, { Component } from '../react'
import { FavouritesList, FavouritesListItem } from './Favourites/UI'

export default class Documents extends Component {
  render() {
    return (
      <FavouritesList title="Dummy">
        <FavouritesListItem data-test-id="foo">dummy</FavouritesListItem>
        <FavouritesListItem data-test-id="foo">dummy</FavouritesListItem>
      </FavouritesList>
    )
  }
}
