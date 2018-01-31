$('#start-button').click(

	function () {

		$('#welcome-text').replaceWith('<div class="card-image"><img class="quiz-img" id="quiz1" src="img/typeface1.jpg"></div>');
		$('#start-button').hide();
		$('#btn-grid').css("display", "grid");

		$('#btn-1').addClass("correct").text('Helvetica');
		$('#btn-2').addClass("incorrect").text('Arial');;
		$('#btn-3').addClass("incorrect").text('Futura');
		$('#btn-4').addClass("incorrect").text('Bodoni');


	});




$('#btn-1').click(function() {
	
	if ($(this).hasClass('incorrect')) {
		$(this).addClass('disabled', 'disabled');
		/*
		$(this).text('INCORRECT');
		*/
	} else if ($(this).hasClass('correct')) 
	{
		correctChange();
	}
	

	});

$('#btn-2').click(function() {
	
	if ($(this).hasClass('incorrect')) {
		$(this).addClass('disabled');
		/*
		$(this).text('INCORRECT');
		*/


	} else if ($(this).hasClass('correct')) 
	{
		correctChange();
	}
	

	});

$('#btn-3').click(function() {
	
	if ($(this).hasClass('incorrect')) {
		$(this).addClass('disabled', 'disabled');
		/*
		$(this).text('INCORRECT');
		*/
	} else if ($(this).hasClass('correct')) 
	{
		correctChange();
	}
	

	});

$('#btn-4').click(function() {
	
	if ($(this).hasClass('incorrect')) {
		$(this).addClass('disabled', 'disabled');
		/*
		$(this).text('INCORRECT');
		*/
	} else if ($(this).hasClass('correct')) 
	{
		correctChange();
	}
	

	});

var quizQ = [{
	typeface: "tf1",
	choices: ["Arial", "Bodoni", "Helvetica", "Futura"],
	cardimage: "img/typeface1.jpg"

}, {
	typeface: "tf2",
	choices: ["Cooper Black", "Didot", "Baskerville", "Minion"],
	cardimage: "img/typeface2.jpg"
}, {
	typeface: "tf3",
	choices: ["Garamond", "Knockout", "Bookman", "Windsor"],
	cardimage: "img/typeface3.jpg"
}

];


function correctChange() {

	$('.incorrect').addClass('disabled');

	if ($('img').is('#quiz1')) {

		$('#next-button').css("display", "block");
		$('.card-image').replaceWith('<div class="correcttext typeface1text"><h4 class="heading">Correct!</h4><p class="body-text">123Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>');
	

	} else if ($('img').is('#quiz2')) {

		$('#next-button').css("display", "block");
		$('.card-image').replaceWith('<div class="correcttext typeface2text"><h4 class="heading">Correct!</h4><p class="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>');
		

	} else if ($('img').is('#quiz3')) {

		$('#next-button').css("display", "block");
		$('.card-image').replaceWith('<div class="correcttext typeface3text"><h4 class="heading">Correct!</h4><p class="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>');

	} 


};

function buttonReset() {
	$('.quiz-btn').removeClass("incorrect").removeClass("correct").removeClass("disabled");
}

$('#next-button').click(function() {

	$('#next-button').hide();
	buttonReset();

	
	if ($('.correcttext').hasClass('typeface1text')) {

		$('.correcttext').replaceWith('<div class="card-image"><img class="quiz-img" id="quiz2" src="img/typeface2.jpg"></div>');
		$('#btn-1').text(quizQ[1].choices[0]).addClass('incorrect');
		$('#btn-2').text(quizQ[1].choices[1]).addClass('incorrect');
		$('#btn-3').text(quizQ[1].choices[2]).addClass('incorrect');
		$('#btn-4').text(quizQ[1].choices[3]).addClass('correct');


	} else if ($('.correcttext').hasClass('typeface2text')) {

		$('.correcttext').replaceWith('<div class="card-image"><img class="quiz-img" id="quiz3" src="img/typeface3.jpg"></div>');
		$('#btn-1').text(quizQ[2].choices[0]).addClass('correct');
		$('#btn-2').text(quizQ[2].choices[1]).addClass('incorrect');
		$('#btn-3').text(quizQ[2].choices[2]).addClass('incorrect');
		$('#btn-4').text(quizQ[2].choices[3]).addClass('incorrect');


	} else if ($('.correcttext').hasClass('typeface3text')) {

		$('.correcttext').replaceWith('<div class="card-image"><img class="quiz-img" id="quiz4" src="img/typeface4.jpg"></div>');
		$('#btn-1').text(quizQ[3].choices[0]).addClass('incorrect');
		$('#btn-2').text(quizQ[3].choices[1]).addClass('incorrect');
		$('#btn-3').text(quizQ[3].choices[2]).addClass('incorrect');
		$('#btn-4').text(quizQ[3].choices[3]).addClass('incorrect');
	}


});