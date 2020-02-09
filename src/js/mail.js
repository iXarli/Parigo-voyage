$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			let formInner = document.querySelectorAll('.form-inner');
			formInner.forEach(function(event) {
				event.classList.remove('form-active');
			});
			swal("Ваша заявка успешно отправлена!"," ", "success");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});