const resetForms = function () {
  $('form').trigger('reset')
}

const onSignUpSuccess = function (response) {
  $('#message').text('Sign Up successful!')
  resetForms()
}

const onError = function (error) {
  $('#message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

module.exports = {
  onSignUpSuccess,
  onError
}
