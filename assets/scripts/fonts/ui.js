'use strict'

const store = require('../store.js')
const selectFontsTemplate = require('../templates/selectFontsTemplate.handlebars')
const allFontsTemplate = require('../templates/allFontsTemplate.handlebars')

const onPreloadSuccess = (responseData) => {
  store.fonts = responseData.fonts
  const selectFontsHTML = selectFontsTemplate({ fonts: store.fonts })
  $('#select-font').append(selectFontsHTML)
  const allFontsHTML = allFontsTemplate({ fonts: store.fonts })
  $('#font-display').html(allFontsHTML)
}

const onIndexFontsError = (responseData) => {
  $('#font-display').html('Error on indexing fonts!')
}

module.exports = {
  onPreloadSuccess,
  onIndexFontsError
}
