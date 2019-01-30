'use strict'

const store = require('../store.js')

const onIndexFontsSuccess = (responseData) => {
  $('#font-display').html('')
  console.log(responseData.fonts)
  store.fonts = responseData.fonts
  store.fonts.forEach(font => {
    const fontHTML = (`
      <div class="row col-12">
        <div class="col-6" data-fontId="${font.id}">${font.id}: ${font.name}
        </div>
      </div>`)
    $('#font-display').append(fontHTML)
  })
}

const onIndexFontsError = (responseData) => {
  $('#font-display').html('Error on indexing fonts!')
}

module.exports = {
  onIndexFontsSuccess,
  onIndexFontsError
}
