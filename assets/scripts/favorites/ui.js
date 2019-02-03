'use strict'

const store = require('../store.js')
const allFavoritesTemplate = require('../templates/allFavoritesTemplate.handlebars')
const showFavoriteTemplate = require('../templates/showFavoriteTemplate.handlebars')

const onIndexFavoritesSuccess = (responseData) => {
  store.favorites = responseData.favorites
  const favHTML = allFavoritesTemplate({ favorites: store.favorites })
  $('#fav-table').html(favHTML)
}

const onShowFavoriteSuccess = (responseData) => {
  store.favorite = responseData.favorite
  console.log(store.favorite)
  const favHTML = showFavoriteTemplate({ favorite: store.favorite })
  $('#fav-table').html(favHTML)
}

const onCreateFavoriteSuccess = (responseData) => {
  store.favorite = responseData.favorite
  $('#favorite-display').html('Created a new favorite font!')
}

const onUpdateFavoriteSuccess = (responseData) => {
  store.favorite = responseData.favorite
  $('#favorite-display').html(`Updated favorite font to ${store.favorite.font.name}`)
}

const onDeleteFavoriteSuccess = () => {
  $('#favorite-display').html('Successfully removed favorite!')
}

const onIndexFavoritesError = (responseData) => {
  $('#favorite-display').html('Error on indexing favorites!')
}

const onShowFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on showing favorite!')
}

const onCreateFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on creating favorite!')
}

const onUpdateFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on updating favorite!')
}

const onDeleteFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on deleting favorite!')
}

module.exports = {
  onIndexFavoritesSuccess,
  onIndexFavoritesError,
  onShowFavoriteSuccess,
  onShowFavoriteError,
  onCreateFavoriteSuccess,
  onCreateFavoriteError,
  onUpdateFavoriteSuccess,
  onUpdateFavoriteError,
  onDeleteFavoriteSuccess,
  onDeleteFavoriteError
}
