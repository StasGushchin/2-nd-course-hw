// 1 //
let numbers = function (num1, num2) {
    if (num1 <= num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(numbers(8, 4));
console.log(numbers(2, 4));
console.log(numbers(6, 6));

// 2 //
let number = function (num) {
    if (num % 2 === 0) {
        return ('Число четное');
    } else {
        return ('Число нечетное');
    }
}
console.log(number(7));
console.log(number(8));

// 3.1 //
function square (num) {
    let square = num**2;
    console.log(square);
}
square(4);
square(5);
square(6);

// 3.2 //
let number1 = function (num) {
    return num**2;
}
console.log(number1(4));
console.log(number1(5));
console.log(number1(6));





