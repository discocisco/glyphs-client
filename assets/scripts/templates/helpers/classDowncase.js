// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const classDowncase = (str) => {
  return str.split(' ').join('-').toLowerCase()
}

module.exports = classDowncase
