// hw2 //

// 1 //
let a = 20;
alert(a);

// 2 //
let iphone = "Год выпуска первого iPhone - 2007";
alert(iphone);

// 3 //

let founderJs = "Создатель языка JavaScript - Бренданом Айком";
alert(founderJs);

// 4 //
let firstNumber = 10;
let secondNumber = 2;
alert(firstNumber + secondNumber);
alert(firstNumber - secondNumber);
alert(firstNumber * secondNumber);
alert(firstNumber / secondNumber);

// 5 //
let number = 2;
alert(number**5);

// 6 //
let aNum = 9;
let bNum = 2;
alert(aNum % bNum);

// 7 //
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8 //
let age = prompt("Сколько вам лет?");
alert(age);

// 9 //

const user = {
    name: 'Stas',
    age: 28,
    isAdmin: true,
}
user.cityOfResidence = 'Nizhny Novgorod';
user.age = 29;
delete user.cityOfResidence;

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// 10 //
let countName = prompt('Как вас зовут?');
alert(`Привет ${countName}!`);


