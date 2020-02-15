$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Get the submit button
	var button = $('.mu-send-msg-btn');

	// Disable or enable the button
	function buttonEnable(enable) {
		// Check if to disable or enable
		if (enable) {
			button.attr('disabled', false);
			button.text('SUBMIT')
		} else {
			button.attr('disabled', true);
			button.text('Sending...')
		}
	}

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Disable the button first
		buttonEnable(false);

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			headers: {"Access-Control-Allow-Origin": "*"},
			url: $(form).attr('action'),
			data: formData,
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#message').val('');

			// Enable the button
			buttonEnable(true);
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}

			// Enable the button
			buttonEnable(true);
		});

	});

});
