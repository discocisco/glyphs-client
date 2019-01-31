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

const showFavorite = (favID) => {
  return $.ajax({
    url: config.apiUrl + '/favorites/' + favID,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createFavorite = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/favorites/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateFavorite = (form) => {
  const formData = form
  formData.favorite.user_id = store.user.id
  return $.ajax({
    url: config.apiUrl + '/favorites/' + form.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  indexFavorites,
  showFavorite,
  createFavorite,
  updateFavorite
}
