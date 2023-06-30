// 1 //
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
console.log(people.sort((a, b) => a.age - b.age));

// 3 доделать//
const currentDate = () => {
    let date = new Date();
    const interval = setInterval(() => {
        console.log(date);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, 30 * 1000)
};

currentDate();

// 4 доделать//
// function delayForSecond(callback) {
//     // Код писать можно только внутри этой функции
//     setTimeout(callback, 1000);
//     callback();
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })

// 5 //
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi('Глеб'))