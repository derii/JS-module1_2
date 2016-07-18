/*======================== Сheck the number ==========================*/
do {
var number = prompt('Введите число:', '');
var rank = prompt('Введите степень:', '');
} while( !(isNumeric(number) && isNumeric(rank)) );

/*======================== Сheck the rank ==========================*/
if(rank < 0) {
	alert('Степень ' + rank + 
			'не поддерживается, введите число, больше 0');
} else {
	console.log( numPow(number, rank) );
}

/*============================= Functions ===========================*/
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function numPow(number, rank) {
	var result = 1;

	for (var i = 0; i < rank; i++) {
		result *= number;
	}

	return result;
}