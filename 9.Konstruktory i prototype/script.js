//zadanie 1 

function Person(firstName, surname, age, nationality, city, language) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age; 
    this.diffrentAge = function (diffrentAge) {
        return (this.age = diffrentAge);
    }
    this.nationality = nationality
    this.city = city
    this.diffrentCity = function (diffrentCity) {
        return (this.city = diffrentCity);
    }
    this.language = language;
}
const firstPerson = new Person('Mateusz', 'Kosinski', 21, 'Poland', 'Cracow', 'Polish');
const secondPerson = new Person('Jan', 'Kowalski', 22, 'Poland', 'Cracow', 'Polish');
const thirdPerson = new Person('Anna', 'Kowalska', 23, 'Poland', 'Cracow', 'Polish');
const fourthPerson = new Person('Michal', 'Nowak', 24, 'Poland', 'Cracow', 'Polish');
const fifthPerson = new Person('Julia', 'Nowak', 25, 'Poland', 'Cracow', 'Polish');
firstPerson.diffrentAge(20)
firstPerson.diffrentCity('Warszawa')
console.log(firstPerson.firstName, firstPerson.surname, firstPerson.age, firstPerson.city)
console.log(secondPerson.firstName, secondPerson.surname, secondPerson.age, secondPerson.city)


//Obiekt (dokładnie firstPerson) na którym wywołaliśmy metodę zmieniające wiek oraz miasto zmienił na dane podane w argumencie,
//natomiast pozostałe obiekty posiadają identyczne dane jak po przypisaniu.

//zadanie 2

class Calculator {
    constructor () {
        this.historyOfOperation = []
    }
     showHistoryOfOperations () {
         return this.historyOfOperation.forEach((OperationHistory) => console.log(OperationHistory));
    }
    cleanHistoryOfOperations () {
        this.historyOfOperation = []
    }
     adding (x,y) {
        let addingResult = x + y
        this.historyOfOperation.push({
            OperationHistory: 'add two numbers:', x, y ,'result:': addingResult
        });
        return addingResult;
    }
     subtraction (x,y) {
        let subtractionResult = x - y
        this.historyOfOperation.push({
            OperationHistory: 'subtracts two numbers', x, y, 'result:': subtractionResult
        });
        return subtractionResult;
    }
     multiplication (x,y) {
        let multiplicationResult = x * y
        this.historyOfOperation.push({
            OperationHistory: 'multiply two number:', x, y, 'result:': multiplicationResult
        });
        return multiplicationResult;
    }
     dividing (x,y) {
        let dividingResult = x / y
        this.historyOfOperation.push({
            OperationHistory: 'divide two numbers:', x, y, 'result:': dividingResult
        });
        return dividingResult;
    }
}

let firstOperations = new Calculator;
let secondOperations = new Calculator;
firstOperations.adding (1,2)
secondOperations.adding(6,3);
firstOperations.subtraction(10,5)
secondOperations.subtraction(6,3);
firstOperations.multiplication(8,7)
secondOperations.multiplication(6,3);
firstOperations.dividing(125,5)
secondOperations.dividing(6,3);
firstOperations.showHistoryOfOperations();
secondOperations.showHistoryOfOperations ();
secondOperations.cleanHistoryOfOperations ();
secondOperations.showHistoryOfOperations ();

//zadanie 3
function newGame () {
    this.randomNumber = function() {    
        newGame.prototype.interval = setInterval(() => {
        newGame.prototype.secondNumber = Math.random()* 10
        console.log(newGame.prototype.secondNumber);
        },1000);
    }
    this.checkingNumber = function () {
        newGame.prototype.secondInterval = setInterval (() => {
        if (newGame.prototype.secondNumber > 5) {
            console.log('The number is higher than "5"')
            clearInterval(newGame.prototype.interval);
            clearInterval(newGame.prototype.secondInterval)
        } }, 1000)
    }
}

let firstPhase = new newGame();
let secondPhase = new newGame();
firstPhase.randomNumber();
secondPhase.checkingNumber();
