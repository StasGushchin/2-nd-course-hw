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
    console.log(`${names} - зарплата ${guys[names]} долларов`);
}

// 5 //
let n = 1000;
let num = 1;
while ((n / 2) >= 50) {
    console.log(n / 2);
    n = n / 2
    console.log(num);
    num++;
}

// 6 //
let friday = 5;
for (let i = 1; friday < 31; i++) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday +=7;
}


