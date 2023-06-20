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

// 4 //
function age () {
    let answer = prompt ('Сколько вам лет?');

    if (isNaN(answer) === false) {
        
        if (answer < 0) {
            alert('Вы ввели неправильное значение');
        } 
        
        else if (answer > 0 && answer <= 12) {
            alert ('Привет, друг!');
        }
    
        else {
            alert ('Добро пожаловать!');
        }

    } else {
        alert('Вы ввели неправильное значение');
    }
}

age ();

// 5 //
let numbs = function (num1, num2) {
    if (isNaN(num1 && num2) === false) {
        return num1 * num2;
    } else {
        return ('Одно или оба значения не являются числом');
    }
}

console.log(numbs("f","a"));
console.log(numbs(2,5));
console.log(numbs(5,"a"));

// 6 //
let cube = (n) => {
    if (isNaN(n) === false) {
        let result = n**3;
        return (`${n} в кубе равняется ${result}`)
    } else {
        return ('Переданный параметр не является числом')
    }
}

console.log(cube(0));
console.log(cube(1));
console.log(cube(2));
console.log(cube(3));
console.log(cube(4));
console.log(cube(5));
console.log(cube(6));
console.log(cube(7));
console.log(cube(8));
console.log(cube(9));
console.log(cube(10));













