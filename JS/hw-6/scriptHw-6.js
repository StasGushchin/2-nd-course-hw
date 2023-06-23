// 1 //
let numbers = [1, 5, 4, 10, 0, 3];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 10) break;
        console.log(numbers[i]);
        
    }

// 2 //
let num = [1, 5, 4, 10, 0, 3];
num.forEach((el, index) => {
    if (el === 4)
	console.log(`${index}`);
});



let numbs = [1, 5, 4, 10, 0, 3];
let b = numbs.indexOf(4);
console.log(b);

// 3 //
let number = [1, 3, 5, 10, 20];
number = number.join(' ');
console.log(number);

// 4 доделать//
let arr = [];
    for (let i = 0; i < 3; i++) {
    arr[i] = [];

        for (let j = 0; j < 3; j++) {
        arr[i].push[j];
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
let a = +prompt('Угадай число')
    if (r.includes(a)) {
        alert('Угадал');
    } else {
        alert('Не угадал');
    }




