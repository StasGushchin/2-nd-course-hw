// 1 //
let numbers = [1, 5, 4, 10, 0, 3];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 10) break;
        console.log(numbers[i]);
    }

// 2 //

// forEach //
let num = [1, 5, 4, 10, 0, 3];
num.forEach((el, index) => {
    if (el === 4)
	console.log(`${index}`);
});

// indexOf //
let numbs = [1, 5, 4, 10, 0, 3];
let b = numbs.indexOf(4);
console.log(b);

// 3 //
let number = [1, 3, 5, 10, 20];
number = number.join(' ');
console.log(number);

// 4 //
let arr = [];
    for (let i = 0; i <= 2; i++) {
    arr[i] = [];
        for (let j = 0; j < 3; j++) {
        arr[i].push(1);
        }
    }
console.log(arr);


// 5 //
let n = [1, 1, 1];
n.push(2, 2, 2);
console.log(n);

// 6 //
let m = [9, 8, 7, 'a', 6, 5];
m = m.sort();
m.pop();
console.log(m);

// 7 //
let r = [9, 8, 7, 6, 5];
let a = +prompt('Угадай число');
    if (r.includes(a)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }

// 8 //
let string = 'abcdef';
string = string.split('');
let rev = string.reverse();
rev = rev.join('');
console.log(rev);

// 9 //
let arrArr = [[1, 2, 3,],[4, 5, 6]];
let result = [].concat(...arrArr);
    console.log(result);

// 10 //
let randomArr = [1, 2, 3, 4, 5];
    for (let i = 0; i < randomArr.length - 1; i++) {
        let result = randomArr[i] + randomArr[i + 1];
        console.log(result);
}

// 11 //
let numbsArr = [1, 2, 3, 4, 5];
    let square = numbsArr.map(function(numbsArr) {
        return numbsArr**2;
    })
    console.log(square);

// 12 //
function LengthWords(array) {
    return array.map(array => `${array.length}`)
}
const getLengthWords = ['привет', '', 'как', 'дела'];
console.log(LengthWords(getLengthWords));

// 13 //
function filterPositive(array) {
    return array.filter(function (n) {
        return n < 0;
    });
}
const arr1 = [-1, 0, 5, -10, 56];
const arr2 = [-25, 25, 0, -1000, -2];
console.log(filterPositive(arr1));
console.log(filterPositive(arr2));
    
    
    



