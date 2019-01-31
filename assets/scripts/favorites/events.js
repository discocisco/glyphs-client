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
  const formData = getFormFields(event.target)
  api.updateFavorite(formData)
    .then(ui.onUpdateFavoriteSuccess)
    .catch(ui.onUpdateFavoriteError)
}

const onDeleteFavorite = (event) => {
  event.preventDefault()
  const favId = getFormFields(event.target)
  api.deleteFavorite(favId)
    .then(ui.onDeleteFavoriteSuccess)
    .catch(ui.onDeleteFavoriteError)
}

module.exports = {
  onIndexFavorites,
  onShowFavorite,
  onCreateFavorite,
  onUpdateFavorite,
  onDeleteFavorite
}
