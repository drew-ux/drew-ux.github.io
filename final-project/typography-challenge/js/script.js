$('#start-button').click(

	function () {

		$('#welcome-text').replaceWith('<div class="card-image"><img class="quiz-img" src="img/helvetica.png"></div>');
		$('#start-button').hide();
		$('#btn-grid').css("display", "grid");

		
		$('#btn-1').addClass("correct");
		$('#btn-2').addClass("incorrect");


	}


);

$('.quiz-btn').click(

	function () {
	
	$('.quiz-btn').hasClass('incorrect').attr('disabled', 'disabled');

}

);