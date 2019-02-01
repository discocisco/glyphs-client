'use strict'

const config = require('../config.js')
// const store = require('../store.js')

const preloadFonts = () => {
  return $.ajax({
    url: config.apiUrl + '/fonts',
    method: 'GET'
  })
}

module.exports = {
  preloadFonts
}
