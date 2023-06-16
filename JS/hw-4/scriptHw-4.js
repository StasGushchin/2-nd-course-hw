// 1 //
let i = 0;
while (i < 2) {
    console.log('Привет!');
    i++;
}

// 2 //
let a = 1;
do {
    console.log(a);
    a++;
} while (a < 6);

// 3 //
let b = 7;
do {
    console.log(b);
    b++;
} while (b < 23);

// 4 //
const guys = {
	'Коля': 200,
    'Вася': 300,
    'Петя': 400,
};
for (let names in guys) {
    alert(`${names} - зарплата ${guys[names]} долларов`);
}

// 5 //
const n = 1000;
while ((n / 2) >= 50) {
    console.log(n / 2);

}

