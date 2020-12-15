const store = require('./../store')

const resetForms = function () {
  $('form').trigger('reset')
}

const onSignUpSuccess = function (response) {
  $('#account-message').show()
  $('#account-message').text('Account created!')
  resetForms()
}

const onSignInSuccess = function (response) {
  $('#message').show()
  $('#message').text('Sign In successful!')
  // store the user object so we can use token later with authorized events
  store.user = response.user
  // hide unauthenticated features
  // unhide authenticated features
  $('.unauthenticated').hide()
  $('.game').hide()
  $('.authenticated').show()

  resetForms()
}

const onChangePasswordSuccess = function (response) {
  console.log('here is the response: ', response)
  $('#message').text('Change Password successful!')
  resetForms()
}

const onSignOutSuccess = function () {
  $('#message').hide()
  $('#account-message').show()
  $('#account-message').text('Sign Out successful!')
  // hide authenticated features
  // unhide unauthenticated features
  $('.authenticated').hide()
  $('.unauthenticated').show()
  resetForms()
}

const onError = function (error) {
  $('#account-message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
