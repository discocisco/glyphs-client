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

const onCreateFavorite = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createFavorite(formData)
    .then(ui.onCreateFavoriteSuccess)
    .catch(ui.onCreateFavoriteError)
}

const onUpdateFavorite = (event) => {
  event.preventDefault()
  const form = getFormFields(event.target)
  api.updateFavorite(form)
    .then(ui.onUpdateFavoriteSuccess)
    .catch(ui.onUpdateFavoriteError)
}

module.exports = {
  onIndexFavorites,
  onShowFavorite,
  onCreateFavorite,
  onUpdateFavorite
}
