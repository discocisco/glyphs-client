'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onIndexFavorites = (event) => {
  event.preventDefault()
  api.indexFavorites()
    .then(ui.onIndexFavoritesSuccess)
    .catch(ui.onIndexFavoritesError)
}

const onShowFavorite = (event) => {
  event.preventDefault()
  const idTarget = getFormFields(event.target)
  api.showFavorite(idTarget.favorites.id)
    .then(ui.onShowFavoriteSuccess)
    .catch(ui.onShowFavoriteError)
}

module.exports = {
  onIndexFavorites,
  onShowFavorite
}
