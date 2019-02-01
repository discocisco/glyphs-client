'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onIndexFonts = (event) => {
  event.preventDefault()
  $('#font-display').toggle()
}

const onPreloadFonts = () => {
  api.preloadFonts()
    .then(ui.onPreloadSuccess)
    .catch(ui.onIndexFontsError)
}

module.exports = {
  onIndexFonts,
  onPreloadFonts
}
