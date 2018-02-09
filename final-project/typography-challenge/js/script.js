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

var quizObj = [{
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
		$('.card-image').replaceWith('<div class="correcttext typeface1text"><h4 class="heading"><i class="em em-tada" id="icon-size"></i>Correct!<i class="em em-tada" id="icon-size"></i></h4><p class="body-text">Congratulations! You really know your stuff! This definitely isn\'t placeholder text. What you\'re reading here is very interesting and informative.</p>');
	

	} else if ($('img').is('#quiz2')) {

		$('#next-button').css("display", "block");
		$('.card-image').replaceWith('<div class="correcttext typeface2text"><h4 class="heading"><i class="em em-tada" id="icon-size"></i>Correct!<i class="em em-tada" id="icon-size"></i></h4><p class="body-text">Congratulations! You really know your stuff! This definitely isn\'t placeholder text. What you\'re reading here is very interesting and informative.</p></div>');
		

	} else if ($('img').is('#quiz3')) {

		$('#next-button').css("display", "block");
		$('.card-image').replaceWith('<div class="correcttext typeface3text"><h4 class="heading"><i class="em em-tada" id="icon-size"></i>Correct!<i class="em em-tada" id="icon-size"></i></h4><p class="body-text">Congratulations! You really know your stuff! This definitely isn\'t placeholder text. What you\'re reading here is very interesting and informative.</p></div>');

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
		$('#btn-1').text(quizObj[1].choices[0]).addClass('incorrect');
		$('#btn-2').text(quizObj[1].choices[1]).addClass('incorrect');
		$('#btn-3').text(quizObj[1].choices[2]).addClass('incorrect');
		$('#btn-4').text(quizObj[1].choices[3]).addClass('correct');


	} else if ($('.correcttext').hasClass('typeface2text')) {

		$('.correcttext').replaceWith('<div class="card-image"><img class="quiz-img" id="quiz3" src="img/typeface3.jpg"></div>');
		$('#btn-1').text(quizObj[2].choices[0]).addClass('correct');
		$('#btn-2').text(quizObj[2].choices[1]).addClass('incorrect');
		$('#btn-3').text(quizObj[2].choices[2]).addClass('incorrect');
		$('#btn-4').text(quizObj[2].choices[3]).addClass('incorrect');


	} else if ($('.correcttext').hasClass('typeface3text')) {

		$('.correcttext').replaceWith('<div class="correcttext typeface3text"><h4 class="heading">The end!</h4><p class="body-text">Thanks for taking the Typography Challenge. Typography is is another way for designers to convey emotion, context, and delight. I hope that you have been inspired by some of these examples.</p></div>');
		$('#btn-grid').hide();
		$('#reset-button').css("display", "block");
	}


		/*
		$('.correcttext').replaceWith('<div class="card-image"><img class="quiz-img" id="quiz4" src="img/typeface4.jpg"></div>');
		$('#btn-1').text(quizObj[3].choices[0]).addClass('incorrect');
		$('#btn-2').text(quizObj[3].choices[1]).addClass('incorrect');
		$('#btn-3').text(quizObj[3].choices[2]).addClass('incorrect');
		$('#btn-4').text(quizObj[3].choices[3]).addClass('incorrect');
		*/



});

$('#reset-button, #header-title').click( function() {

	location.reload();

});