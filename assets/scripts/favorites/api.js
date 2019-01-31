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

const updateFavorite = (formData) => {
  formData.favorite.user_id = store.user.id
  return $.ajax({
    url: config.apiUrl + '/favorites/' + formData.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteFavorite = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/favorites/' + formData.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexFavorites,
  showFavorite,
  createFavorite,
  updateFavorite,
  deleteFavorite
}
