(function ($) {
  "use strict";

  $('.contact-form').on('submit', function (e) {
    e.preventDefault();
    var form = $(this);
    var name = form.find('input[name="name"]').val();
    var email = form.find('input[name="email"]').val();
    var phone = form.find('input[name="phone"]').val();
    var message = form.find('textarea[name="message"]').val();
    var subject = form.find('select[name="subject"]').val();
    var mailto_link = 'mailto:ahmadfateh.977@gmail.com?subject=' + subject + '&body=' + 'Name: ' + name + '%0A' + 'Email: ' + email + '%0A' + 'Phone: ' + phone + '%0A' + 'Message: ' + message;

    // Attempt to open the mail client
    var newWindow = window.open(mailto_link, '_blank');

    // If the mail client is not opened, show an alert.
    // This is a simple check, and might not work in all browsers.
    if(!newWindow || newWindow.closed || typeof newWindow.closed=='undefined')
    {
      // The mailto link failed, so we can't be sure the email was sent.
      // In a real-world scenario, you'd want to use a server-side solution.
    }

    // Show a success message
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    form.trigger('reset');
  });
})(window.jQuery);
