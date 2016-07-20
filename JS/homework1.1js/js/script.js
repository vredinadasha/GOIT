function pow(number,exponent){
    var result = x;

    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

var x = prompt("Пожалуйста, введите число", '');
var n = prompt("Пожалуйста, введите степень", '');

if (n <= 0) {
    alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 0');
} 
else {
    alert( 'Ваш результат ' + pow(x,n) );
}