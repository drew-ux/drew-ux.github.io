// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


$('#first').click(swapForFirst);
$('#second').click(swapForSecond);
$('#third').click(swapForThird);
$('#fourth').click(swapForFourth);

function swapForFirst() {
	$('#bigimage').attr('src', 'img/1.jpg');
}

function swapForSecond() {
	$('#bigimage').attr('src', 'img/2.jpg');
}

function swapForThird() {
	$('#bigimage').attr('src', 'img/3.jpg');
}

function swapForFourth() {
	$('#bigimage').attr('src', 'img/4');
}