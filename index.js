	



	$("input[name=num]").on("focus", function() {

		alert("Must be over 18");
	});

	$("input[name=url]").on("blur", function() {
		var check = $(this)[0].checkValidity();

		$(this)[0].setCustomValidity("Please Use Complete url; http://www.myurl.com");
		if (check == false){
			$(this).aftr($(this)[0].validationMessage);
		}
	});

	$("#submit").on("click", function() {
		var name = $("input[name=name]").val();

		$("#submit").after(name);
	});

	$("input[name=other]").on("keydown", function(event) {

		if (event.which == 13) {
			$("#submit").click();
		}
	});

});