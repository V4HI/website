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
    window.location.href = mailto_link;
  });
})(window.jQuery);
