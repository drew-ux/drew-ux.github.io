// 1. Inside of the calculateDrinks function, use document.querySelector()
// and the .value method to store inputs from the following elements into variables:
//
// #current-age
// #max-age
// #fav-drink
// #num-per-day
//
// ex: var currentAge = document.querySelector('#current-age').value

// 2. Then, still inside of the calculateDrinks function, create a variable, drinksLeft,
// which represents the result of your (maxAge - currentAge) * 365 * numPerDay

// 3. Lastly, output the correct values to for the user

function calculateDrinks() {
  // 1. Store inputs as variables here:
  var currentAge = document.querySelector('#current-age').value;
  var maxAge = document.querySelector('#max-age').value;
  var favDrink = document.querySelector('#fav-drink').value;
  var numPerDay = document.querySelector('#num-per-day').value;

  // 2. Caclulate drinksLeft
  var drinksLeft = (maxAge - currentAge) * 365 * numPerDay;

  // 3. Output result for user to see:
  document.querySelector('#total-num-of-drinks-output').innerHTML = drinksLeft;
  document.querySelector('#drink-output').innerHTML = favDrink;
}

document.querySelector('#click-me').onclick = calculateDrinks;

