const store = require('./../store')

const resetForms = function () {
  $('form').trigger('reset')
}

const onSignUpSuccess = function (response) {
  $('#message').text('Sign Up successful!')
  resetForms()
}

const onSignInSuccess = function (response) {
  $('#message').text('Sign In successful!')
  // store the user object so we can use token later with authorized events
  store.user = response.user
  // later will unhide hidden HTML elements with .show
  resetForms()
}

const onChangePasswordSuccess = function (response) {
  console.log('here is the response: ', response)
  $('#message').text('Change Password successful!')
  resetForms()
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onError
}
