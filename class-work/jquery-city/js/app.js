// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$('.thumb').click(changeBigImage); 

function changeBigImage () {

	var imageUrl = $(this).attr('src');

	$('#bigimage').attr('src', imageUrl);


}

