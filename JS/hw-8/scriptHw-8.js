// 1 //
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
console.log(people1.sort((a, b) => a.age - b.age));

// 2 доделать//
function isPositive(arr) {
    return arr[i] >= 0;
    }
function isMale(gender) {
    // писать код тут
    let gender = people.filter(function (a) {
        if (a.gender === 'male') {
            return a;
        }
    });
    }
function filter(arr, ruleFunction) {
        const output = [];
        for (let i = 0; i < arr.length; i++) {
            output.push(ruleFunction(arr[i]));
        }
        return output;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// 3 //
const currentDate = () => {
    
    const interval = setInterval(() => {
        let date = new Date();
        console.log(date);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, 30 * 1000)
};

currentDate();

// 4 //
function delayForSecond(callback) {
    setTimeout(callback, 1000);
    
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// 5 доделать//
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
setTimeout(() => delayForSecond(sayHi('Глеб')), 2000)
