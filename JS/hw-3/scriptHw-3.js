// // hw3 //

// // 1 //
// let password = 'пароль';
// let enter = prompt('Введите пароль');
// if (enter === password) {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно');
// }

// // 2 //
// let c = 5;
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// // 3 //
// let d = prompt('Введите первое число');
// let e = prompt('Введите второе число');
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// // 4 //
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

// // 5 //
// let monthNumber = prompt('Введите номер месяца');

// switch (monthNumber) {
//     case '12':
//     case '1':
//     case '2':
//         console.log('Зима');
//         break;

//     case '3':
//     case '4':
//     case '5':
//         console.log('Весна');
//         break;

//     case '6':
//     case '7':
//     case '8':
//         console.log('Лето');
//         break;

//     case '9':
//     case '10':
//     case '11':
//         console.log('Осень');
//         break;

//     default:
//         console.log('Такого месяца не существует');
//         break;
// }

// 7 //
// let number1 = +prompt('Пожалуйста, введите любое число');
// let number2;
// if (number1 === Number(number1)) {
//     number2 = number1;

//     if (number2 === 0) {
//         alert('Вы ввели 0');
        
//     } else if (number2 % 2 === 0) {
//         alert('Число четное');

//     } else {
//         alert('Число нечетное');
//     }
    
// } else {
//     alert ('Некорректный ввод');
// };

// 8, 9 //
let clientOS = Number(prompt ('Введите вашу ОС, 0 - iOS, 1 - Android'));
let clientDeviceYear = Number(prompt ('Введите год выпуска вашего телефона'));
    if (clientOS === 1) {

        if (clientDeviceYear < 2015) {
            alert ('Установите облегченную версию приложения для Android по ссылке');
        } else if (clientDeviceYear >= 2015) {
            alert ('Установите версию приложения для Android по ссылке');
        } else {
            alert ('Неверные данные');
        }

    } else if (clientOS === 0) {
        if (clientDeviceYear < 2015) {
            alert ('Установите облегченную версию приложения для iOS по ссылке');
        } else if (clientDeviceYear >= 2015) {
            alert ('Установите версию приложения для iOS по ссылке');
        } else {
            alert ('Неверные данные');
        }
        
    } else {
        alert ('Неверные данные');
    }
    

