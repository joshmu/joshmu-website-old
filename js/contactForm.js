(function() {
  $(document).ready(function() {

    $('#contactForm').submit(function(event) {
      event.preventDefault();
      submitForm();
    });

    function submitForm() {
      $('#contact-message').addClass('hidden')
        .empty();

      var nameInput = $('#nameInput').val(),
        email = $('#emailInput').val(),
        msg = $('#messageInput').val();

      if (nameInput.length < 1) formNotValid('name');
      if (email.length < 1) formNotValid('email');
      if (msg.length < 1) formNotValid('message');
      if (nameInput.length < 1 || email.length < 1 || msg.length < 1) return false;

      $.ajax({
        type: 'POST',
        url: 'php/form-process.php',
        data: 'name=' + nameInput + '&email=' + email + '&msg=' + msg,
        success: function(text) {
          if (text === 'success') {
            formSuccess();
          } else {
            console.log('Form failed...');
          }
        }
      });
    }

    function formNotValid(field) {
      // decide what error message to show
      var message = '';
      switch (field) {
        case 'name':
          message = 'Please include name.';
          break;
        case 'email':
          message = 'Please include valid email.';
          break;
        case 'message':
          message = 'No message provided.';
          break;
        default:
          message = 'error';
      }
      // output
      $('<h4>').text(message)
        .addClass('text-danger')
        .appendTo('#contact-message')
        .parent()
        .removeClass('hidden');

    }


    function formSuccess() {
      // var msg = $('<h4>').html('Message Sent! <i class="fa fa-smile-o"></i>');
      var msg = $('<h4>').html('Message Sent.');
      $('#contact-message')
        .append(msg)
        .removeClass('hidden');
    }

  });
}());
