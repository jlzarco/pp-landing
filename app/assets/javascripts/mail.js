function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function() {
  $('#mc-embedded-subscribe').click(function( e ) {
    var sEmail = $('#mce-EMAIL').val();
    if ($.trim(sEmail).length == 0) {
      //alert('Please enter valid email address');
      $('#error-message').show();
      $('#error-message').html('Please enter a valid email address');
      e.preventDefault();
      setTimeout(function() {$('#error-message').hide();}, 1500);
      //$('#message').html('  ');
    }
    if (validateEmail(sEmail)) {
      //alert('Email is valid');
      //$('#message').show();
    }
    else {
      //alert('Invalid Email Address');
      $('#error-message').show();
      $('#error-message').html('Invalid E-mail Address');
      e.preventDefault();
      setTimeout(function() {$('#error-message').hide();}, 1500);
      //$('#message').html('  ');
    }
  });
});
