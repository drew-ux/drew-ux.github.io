var total = 0;

$('#a10').click(function () {
	total += 10;

	$('#out').text(total);
});

$('#a20').click(function () {
	total += 20;

	$('#out').text(total);
});

$('#a30').click(function () {
	total += 30;

	$('#out').text(total);
});

$('#n10').click(function () {
	total -= 10;

	$('#out').text(total);
});

$('#n20').click(function () {
	total -= 20;

	$('#out').text(total);
});

$('#n30').click(function () {
	total -= 30;

	$('#out').text(total);
});

$('#red').click(function () {
	$('#out').css('background', 'red');
})

$('#blue').click(function () {
	$('#out').css('background', 'blue');
})

$('#out').click(function () {
	total = 0;

	$('#out')
		.text(total)
		.css('background', 'white');
});


