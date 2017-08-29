'use strict'

module.exports = function() {

	if ( $('PAGE').length == 1 ) { // ADD Page

		var form = $('.feedback__form'), // Form selector
		name = form.find('input[name=name]'),
		email = form.find('input[name=email]'),
		request = form.find('textarea[name=request]'),
		success = $('.form__success'),
		nameError = name.siblings('.form__error'),
		emailError = email.siblings('.form__error'),
		requestError = request.siblings('.form__error'),
		emptyText = 'Это поле обязательно для заполнения',
		wrongEmail = 'Вы ввели некорректный e-mail',
		successText = 'Ваше сообщение было успешно отправленно! Мы свяжемся с Вами в ближайшее время.';

		$('#contact_me').on('click', onSubmit);
		$('#reset_form').on('click', reset);

		name.on('click', clickHideError);
		email.on('click', clickHideError);
		request.on('click', clickHideError);

		function clickHideError() {
			var $this = $(this);
			hideError($this);
		}

		function hideError(elem) {
			var display = elem.siblings('.form__error').css('display');
			if ( display == 'block') {
				elem.siblings('.form__error').css({
					'display' : 'none',
					'opacity' : '0'
				});
			}
		}

		function onSubmit(e) {
			e.preventDefault();

			$( '.form__error' ).css({
				'display' : 'none',
				'opacity' : '0'
			});

			if ( name.val() == '' ) {
				nameError.css('display', 'block').animate({
					'opacity' : '1'
				}, 600)
				.children('.error__text').text(emptyText);
			}
			if ( email.val() == '' ) {
				emailError.css('display', 'block').animate({
					'opacity' : '1'
				}, 600)
				.children('.error__text').text(emptyText);
			}
			if ( request.val() == '' ) {
				requestError.css('display', 'block').animate({
					'opacity' : '1'
				}, 600)
				.children('.error__text').html(emptyText);
			}
			if ( !(email.val() == '') && !( validateEmail(email.val()) ) ) {
				emailError.css('display', 'block').animate({
					'opacity' : '1'
				}, 600)
				.children('.error__text').text(wrongEmail);
			}
			if ( !(name.val() == '') && ( !(email.val() == '') && validateEmail(email.val()) ) && !(request.val() == '') ) {
				mail();
			}

		}

		function reset(e) {
			e.preventDefault();
			form.trigger("reset");
			$('.form__error').css({
				'display' : 'none',
				'opacity' : '0'
			});
		}

		function validateEmail(sEmail) {
			var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
			if (filter.test(sEmail)) {
				return true;
			}
			else {
				return false;
			}
		}

		function mail() {
			$.ajax({
				type: "POST",
				url: "/php/mail.php",
				data: form.serialize()
			}).done(function() {
				success.css('display', 'block').animate({
					'opacity' : '1'
				}, 600).html(successText);
				setTimeout(function() {
					form.trigger("reset");
					success.animate({
						'opacity' : '0'
					}, 600, function() {
						success.css('display', 'none')
					});
				}, 5000);

			});
			return false;
		}

	}

}