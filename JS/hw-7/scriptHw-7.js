// 1 //
let js = "js";
js = js.toUpperCase();
console.log(js);

// 2 //
function searchStart (arr, string) {
    arr.forEach(function(elem) {
        if (elem.toLowerCase().includes(string.toLowerCase())) {
            return elem;
        }
    });
};
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// 3 //
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// 4 //

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

// 8 //
let today = new Date();
console.log(today);
