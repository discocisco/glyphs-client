'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const fontEvents = require('./fonts/events.js')
const favoriteEvents = require('./favorites/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')
const input = $('#font-input')
const output = $('#test-font')

$(() => {
  $('#signup-form').on('submit', authEvents.onSignUp)
  $('#signin-form').on('submit', authEvents.onSignIn)
  $('#changepw-form').on('submit', authEvents.onChangePassword)
  $('#signout-btn').on('click', authEvents.onSignOut)
  $('#fonts-index').on('click', fontEvents.onIndexFonts)
  $('#favorites-index').on('click', favoriteEvents.onIndexFavorites)
  $('#show-favorite').on('submit', favoriteEvents.onShowFavorite)
  $('#create-favorite').on('submit', favoriteEvents.onCreateFavorite)
  $('#update-favorite').on('submit', favoriteEvents.onUpdateFavorite)
  $('#delete-favorite').on('submit', favoriteEvents.onDeleteFavorite)
  $('select').change(function () {
    let str = ''
    $('select option:selected').each(function () {
      str = $(this).text().split(' ').join('-').toLowerCase()
    })
    $('#test-font').removeClass()
    $('#test-font').addClass(str)
  })
  $('#keyboard').keyup(function (event) {
    output.text(input.text())
  })
})
