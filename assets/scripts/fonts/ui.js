'use strict'

const store = require('../store.js')

const onPreloadSuccess = (responseData) => {
  store.fonts = responseData.fonts
  store.fonts.forEach(font => {
    const fontHTML = (`
      <div class="col-6" data-fontId="${font.id}">${font.id}: ${font.name}
      </div>`)
    $('#font-display').append(fontHTML)
  })
}

const onIndexFontsError = (responseData) => {
  $('#font-display').html('Error on indexing fonts!')
}

module.exports = {
  onPreloadSuccess,
  onIndexFontsError
}
