'use strict'

const store = require('../store.js')

const onShowFavoriteSuccess = (responseData) => {
  $('#favorite-display').html('')
  store.favorite = responseData.favorite
  const favHTML = (`
    <div class="col-12">
      <h5>Name:</h5>
      <p>${store.favorite.font.name}</p>
    </div>
    <div class="col-12">
      <h5>Project:</h5>
      <p>${store.favorite.project}</p>
    </div>
    <div class="col-12">
      <h5>Type</h5>
      <p>${store.favorite.font.font_type}</p>
    </div>
    <div class="col-12">
      <h5>URL</h5>
      <p>${store.favorite.font.location}</p>
    </div>
    `)
  $('#favorite-display').append(favHTML)
}

const onCreateFavoriteSuccess = (responseData) => {
  $('#favorite-display').html('')
  store.favorite = responseData.favorite
  const favHTML = (`
    <div class="col-12">
      <h5>Name:</h5>
      <p>${store.favorite.font.name}</p>
    </div>
    <div class="col-12">
      <h5>Project:</h5>
      <p>${store.favorite.project}</p>
    </div>
    <div class="col-12">
      <h5>Type</h5>
      <p>${store.favorite.font.font_type}</p>
    </div>
    <div class="col-12">
      <h5>URL</h5>
      <p>${store.favorite.font.location}</p>
    </div>
    `)
  $('#favorite-display').append(favHTML)
}

const onUpdateFavoriteSuccess = (responseData) => {
  $('#favorite-display').html('')
  store.favorite = responseData.favorite
  const favHTML = (`
    <div class="col-12">
      <h5>Name:</h5>
      <p>${store.favorite.font.name}</p>
    </div>
    <div class="col-12">
      <h5>Project:</h5>
      <p>${store.favorite.project}</p>
    </div>
    <div class="col-12">
      <h5>Type</h5>
      <p>${store.favorite.font.font_type}</p>
    </div>
    <div class="col-12">
      <h5>URL</h5>
      <p>${store.favorite.font.location}</p>
    </div>
    `)
  $('#favorite-display').append(favHTML)
}

const onDeleteFavoriteSuccess = () => {
  $('#favorite-display').html('Successfully removed favorite!')
}

const onShowFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on showing favorite!')
}

const onCreateFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on creating favorite!')
}

const onUpdateFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on updating favorite!')
}

const onDeleteFavoriteError = (responseData) => {
  $('#favorite-display').html('Error on deleting favorite!')
}

module.exports = {
  onShowFavoriteSuccess,
  onShowFavoriteError,
  onCreateFavoriteSuccess,
  onCreateFavoriteError,
  onUpdateFavoriteSuccess,
  onUpdateFavoriteError,
  onDeleteFavoriteSuccess,
  onDeleteFavoriteError
}
