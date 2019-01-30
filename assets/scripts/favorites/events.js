'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onIndexFavorites = (event) => {
  event.preventDefault()
  api.indexFavorites()
    .then(ui.onIndexFavoritesSuccess)
    .catch(ui.onIndexFavoritesError)
}

module.exports = {
  onIndexFavorites
}
