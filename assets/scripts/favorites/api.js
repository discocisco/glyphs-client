'use strict'

const config = require('../config.js')
const store = require('../store.js')

const indexFavorites = () => {
  return $.ajax({
    url: config.apiUrl + '/favorites',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexFavorites
}
