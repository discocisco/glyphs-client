'use strict'

const onSignUpSuccess = (responseData) => {
  $('#user-message').html('Successfully signed up!')
}

const onSignUpError = (responseData) => {
  $('#user-message').html('Error on sign up!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpError
}
