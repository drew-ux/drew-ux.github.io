// Program Flow
//
// 1: User clicks on #clickme
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks === 5, change the background of <body> to red
// 4: Else if the number of clicks === 10, change the background of <body> to green
// 5: Else if the number of clicks === 15, change the background of <body> to blue
// 6: Else, change the background of <body> to black

$('#clickme').click(clickCount);

var clickNum = 0;

function clickCount() {
	clickNum += 1;
	$('#click-num').text(clickNum);

	if (clickNum === 5) {
		$('body').css('background', 'red');
	}

	else if (clickNum === 10) {
		$('body').css('background', 'green');
	}

	else if (clickNum === 15) {
		$('body').css('background', 'blue');
	}

	else {
		$('body').css('background', 'black');
	}
};
