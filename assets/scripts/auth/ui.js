'use strict'

const store = require('../store.js')

const onSignUpSuccess = (responseData) => {
  $('#user-message').html('Successfully signed up!')
}

const onSignUpError = (responseData) => {
  $('#user-message').html('Error on sign up!')
}

const onSignInSuccess = (responseData) => {
  $('.signed_in').show()
  $('.signed_out').hide()
  store.user = responseData.user
  $('#user-message').html(`Successfully signed in as: ${store.user.email}`)
}

const onSignInError = (responseData) => {
  $('#user-message').html('Error on sign in!')
}

const onChangePasswordSuccess = (responseData) => {
  $('#user-message').html(`Successfully changed password for: ${store.user.email}`)
}

const onChangePasswordError = (responseData) => {
  $('#user-message').html('Error on change password!')
}

const onSignOutSuccess = () => {
  $('.signed_in').hide()
  $('.signed_out').show()
  $('#user-message').html(`Successfully signed out of: ${store.user.email}`)
  store.user = null
  store.favorites = null
  store.favorite = null
}

const onSignOutError = () => {
  $('#user-message').html('Error on sign out!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError
}
