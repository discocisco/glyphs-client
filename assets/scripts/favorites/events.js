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
  $('#show-favorite').trigger('reset')
}

const onCreateFavorite = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createFavorite(formData)
    .then(ui.onCreateFavoriteSuccess)
    .then((event) => api.indexFavorites().then(ui.onIndexFavoritesSuccess))
    .catch(ui.onCreateFavoriteError)
  $('#create-favorite').trigger('reset')
}

const onUpdateFavorite = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateFavorite(formData)
    .then(ui.onUpdateFavoriteSuccess)
    .then((event) => api.indexFavorites().then(ui.onIndexFavoritesSuccess))
    .catch(ui.onUpdateFavoriteError)
  $('#update-favorite').trigger('reset')
}

const onDeleteFavorite = (event) => {
  event.preventDefault()
  const favId = getFormFields(event.target)
  api.deleteFavorite(favId)
    .then(ui.onDeleteFavoriteSuccess)
    .then((event) => api.indexFavorites().then(ui.onIndexFavoritesSuccess))
    .catch(ui.onDeleteFavoriteError)
  $('#delete-favorite').trigger('reset')
}

module.exports = {
  onIndexFavorites,
  onShowFavorite,
  onCreateFavorite,
  onUpdateFavorite,
  onDeleteFavorite
}
