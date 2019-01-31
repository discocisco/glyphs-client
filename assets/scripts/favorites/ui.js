'use strict'

const store = require('../store.js')

const onIndexFavoritesSuccess = (responseData) => {
  $('#favorite-display').html('')
  store.favorites = responseData.favorites
  store.favorites.forEach(favorite => {
    const favHTML = (`
      <div class="row col-12">
        <div class="col-6" data-favoriteId="${favorite.id}">
        ${favorite.id}: ${favorite.font.name} ${favorite.font.location}
        </div>
      </div>
      `)
    $('#favorite-display').append(favHTML)
  })
}

const onIndexFavoritesError = (responseData) => {
  $('#favorite-display').html('Error on indexing favorites!')
}

const onShowFavoriteSuccess = (responseData) => {
  $('#favorite-display').html('')
  store.favorite = responseData.favorite
  const favHTML = (`
    <div class="col-12">
      <h5>Name:</h5>
      <p>${store.favorite.font.name}</p>
    </div>
    <div class="col-12">
      <h5>Project:</h5>
      <p>${store.favorite.project}</p>
    </div>
    <div class="col-12">
      <h5>Type</h5>
      <p>${store.favorite.font.font_type}</p>
    </div>
    <div class="col-12">
      <h5>URL</h5>
      <p>${store.favorite.font.location}</p>
    </div>
    `)
  $('#favorite-display').append(favHTML)
}

const onShowFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on showing favorite!')
}

module.exports = {
  onIndexFavoritesSuccess,
  onIndexFavoritesError,
  onShowFavoriteSuccess,
  onShowFavoriteError
}
