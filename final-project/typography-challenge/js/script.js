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
		$('.card-image').replaceWith('<div class="correcttext typeface1text"><h4 class="heading">Correct!</h4><p class="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>');
	

	} else if ($('img').is('#quiz2')) {

		$('#next-button').css("display", "block");
		$('.card-image').replaceWith('<div class="correcttext typeface2text"><h4 class="heading">Correct!</h4><p class="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>');
		

	} else if ($('img').is('#quiz3')) {

		$('#next-button').css("display", "block");
		$('.card-image').replaceWith('<div class="correcttext typeface3text"><h4 class="heading">Correct!</h4><p class="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>');

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
		$('.correcttext'2).replaceWith('<div class="card-image"><img class="quiz-img" id="quiz4" src="img/typeface4.jpg"></div>');
		$('#btn-1').text(quizObj[3].choices[0]).addClass('incorrect');
		$('#btn-2').text(quizObj[3].choices[1]).addClass('incorrect');
		$('#btn-3').text(quizObj[3].choices[2]).addClass('incorrect');
		$('#btn-4').text(quizObj[3].choices[3]).addClass('incorrect');
		*/



});