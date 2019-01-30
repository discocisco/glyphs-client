'use strict'

const store = require('../store.js')

const onSignUpSuccess = (responseData) => {
  $('#user-message').html('Successfully signed up!')
}

const onSignUpError = (responseData) => {
  $('#user-message').html('Error on sign up!')
}

const onSignInSuccess = (responseData) => {
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

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError
}
