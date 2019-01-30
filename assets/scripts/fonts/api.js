'use strict'

const config = require('../config.js')
// const store = require('../store.js')

const indexFonts = () => {
  return $.ajax({
    url: config.apiUrl + '/fonts',
    method: 'GET'
  })
}

module.exports = {
  indexFonts
}
