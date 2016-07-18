var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Введите имя ' + (i+1), '');
}

var userName = prompt('Введите имя пользователя:', '');

findUser(userName, arr);

/*==================== Function findUser ============================*/
function findUser(name, array) {
	for (var i = 0; i < array.length; i++) {
		if (name == array[i]) {
			alert(array[i] + ', вы успешно вошли!');
			break;
		} else if ( i == array.length - 1 ) {	
		    alert('Пользователь с именем ' + name + ' ' + 'не найден!' );
		}
	}
}