// 1 //
let js = "js";
js = js.toUpperCase();
console.log(js);

// 2 доделать//
// function searchStart (arr, string) {
//     arr.forEach((elem) => {
//         if (elem.toLowerCase().startsWith(string.toLowerCase())) {
//             return (elem);
//         }
        
//     });
// };
// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

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

// 6 доделать//
// function randomNum(num) {
//     let array = [];
//     array.length = Math.floor(num / 2);
//     return array.from(() => Math.round(Math.random() * num)
//       );
// }
// console.log(randomNum(6));

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
let daysLater73 = new Date(searchDate)
console.log(daysLater73);

// 10 //

// 11 //