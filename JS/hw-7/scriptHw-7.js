// 1 //
let js = "js";
js = js.toUpperCase();
console.log(js);

// 2 доделать//
function searchStart (arr, string) {
    let arrArr = [];
    let lowerCaseArr = arr.map((el) => el.toLowerCase());
    lowerCaseArr.forEach((element) => {
      if (element.startsWith(string)) {
        arrArr.push(element);
      }
    });
    console.log(arrArr);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// 3 //
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// 4 //
let numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));


// 5 //
    // 1 способ //
function random(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}
console.log(random(1, 10));

    // 2 способ //
function random(min, max) {
    return Math.ceil(Math.random() * (max));
}
console.log(random(1, 10));

// 6 //
function randomNum(num) {
    let array = [];
    for (let i = 0; i < Math.floor(num / 2); i++) {
    array.push(Math.round(Math.random() * num));
    }
    console.log(array);
}
randomNum(6);
randomNum(9);
randomNum(12);


// 7 //
function randomNumbs(num1, num2) {
    if (num1 < num2) {
        return Math.round(Math.random() * (num2 - num1) + num1);
    } else {
        return Math.round(Math.random() * (num1 - num2) + num2);
    }
}
console.log(randomNumbs(5, 15));
console.log(randomNumbs(10, 2));

// 8 //
let today = new Date();
console.log(today);

// 9 //
let currentDate = new Date();
let days73 = currentDate.setDate(currentDate.getDate() + 73);
let searchDate = currentDate + days73;
let daysLater73 = new Date(searchDate);
console.log(daysLater73);

// 10 //
const dateTime = function () {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    let myDate = new Date();
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    let fullTime = "Время: " + hour + ":" + minute + ":" + second;

    let dateTime = `${fullDate} ${fullTime}`;

    console.log(dateTime);
}
dateTime ();

// 11 //
let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
function rememberWords(array) {

let randomWords = array.sort(() => Math.random() - 0.5);

alert(`Запомните слова: ${randomWords}`);

let answerUser1 = prompt('Введите первое слово');
let answerUser2 = prompt('Введите последнее слово');

for (let i = 0; i < words.length; i++)
    if (answerUser1.toLowerCase() === randomWords[0].toLowerCase() && answerUser2.toLowerCase() === randomWords[randomWords.length - 1].toLowerCase()) {
        alert('Вы угадали оба слова!');
        break;
    } else if (answerUser1.toLowerCase() === randomWords[0].toLowerCase() || answerUser2.toLowerCase() === randomWords[randomWords.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
        break;
    } else {
        alert('Вы ответили неверно!');
        break;
    }
}   
rememberWords(words);
