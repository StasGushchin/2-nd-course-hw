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

