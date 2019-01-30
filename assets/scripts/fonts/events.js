'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onIndexFonts = (event) => {
  event.preventDefault()
  api.indexFonts()
    .then(ui.onIndexFontsSuccess)
    .catch(ui.onIndexFontsError)
}

module.exports = {
  onIndexFonts
}
