function seasons () {
    let answer = +prompt ('Введите номер месяца');

    if (isNaN(answer) === false) {
        
        if (answer === 12 || answer === 1 || answer === 2) {
            alert('Зима');
        } 
        
        else if (answer === 3 || answer === 4 || answer === 5) {
            alert ('Весна');
        }

        else if (answer === 6 || answer === 7 || answer === 8) {
            alert ('Лето');
        }

        else if (answer === 9 || answer === 10 || answer === 11) {
            alert ('Осень');
        }
    
        else {
            alert ('Вы ввели неправильное значение');
        }

    } else {
        alert('Вы ввели неправильное значение');
    }
}


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
