function pow() {
    var x = prompt("Пожалуйста, введите число", '');
    var n = prompt("Пожалуйста, введите степень", '');
    var result = 1;

    if (isNaN(+x) || isNaN(+n) || (x == '') || (n == '')) {
        alert("Не поддерживается. Введите число");
        return;
    } else {
        if (x % 1 || n % 1) {
            alert("Не поддерживается. Введите целое число");
            return;
        } else {
            for (var i = 1; i <= n; i++) {
                result *= x;
            }
        }
    }
    alert ("Ваш результат " + result);
}
pow();