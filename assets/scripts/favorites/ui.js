'use strict'

const store = require('../store.js')

const onIndexFavoritesSuccess = (responseData) => {
  store.favorites = responseData.favorites
  console.log(store.favorites)
  store.favorites.forEach(favorite => {
    const favHTML = (`
      <div class="row col-12">
        <div class="col-6" data-favoriteId="${favorite.id}">
        ${favorite.id}: ${favorite.font.name} ${favorite.font.location}
        </div>
      </div>`)
    $('#favorite-display').append(favHTML)
  })
}

const onIndexFavoritesError = (responseData) => {
  $('#favorite-display').html('Error on indexing favorites!')
}

module.exports = {
  onIndexFavoritesSuccess,
  onIndexFavoritesError
}
