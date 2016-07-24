var namesArray = [];
    for (var i = 0; i < 5; i++) {
        namesArray[i] = prompt('Введите имя пользователя' + (i+1), '');
    }

var curentUserName = prompt('Введите текущее имя пользователя:', '');
    if ( namesArray.indexOf(curentUserName) >= 0 ) {
        alert(curentUserName + ', вы успешно вошли!');
    } else {
        alert('Данное имя не найдено!');
    }