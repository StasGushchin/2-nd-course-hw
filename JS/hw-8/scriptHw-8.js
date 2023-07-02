// 1 //
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
console.log(people1.sort((a, b) => a.age - b.age));

// 2 //
function isPositive(num) {
    if (num > 0) {
        return num;
    } else {
        return '';
    }
    
}
function isMale(people) {
    if (people.gender === 'male') {
        return people;
    } else {
        return '';
    }
}
function filter(arr, ruleFunction) {
    const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i]) !== '') {
                result.push(ruleFunction(arr[i]));
            }
        }
            return result;   
}           
            
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));

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
function delayForSecond1(callback) {
    setTimeout(callback, 1000);
    
}

delayForSecond1(function () {
    console.log('Привет, Глеб!');
})

// 5 //
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond();
setTimeout(() => sayHi('Глеб'), 2000);

