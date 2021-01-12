//zadanie 1

const person = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 20,
    nationality: 'Poland',
    city: 'Cracow',
    showInformation () {
        console.log(this.name, this.surname, this.age, this.nationality, this.city)
    },
    addAge () {
        this.age++;
    }
}

const person2 = {
    name: 'Anna',
    surname: 'Nowak',
    age: 21,
    nationality: 'Poland',
    city: 'Warsaw',
    showInformation () {
        console.log(this.name, this.surname, this.age, this.nationality, this.city)
    },
    addAge () {
        this.age++
    },
}
 
person2.showInformation();
person.showInformation();
person.addAge();
person.addAge();
person.addAge();
person.addAge();
person2.addAge();
person2.addAge();
person.showInformation();
person2.showInformation();

//Zadanie 2

const person = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 20,
    nationality: 'Poland',
    city: 'Cracow',
    showInformation () {
        console.log(this.name, this.surname, this.age, this.nationality, this.city)
    },
    addAge () {
        this.age++;
    }
}
const person2 = {
    name: 'Anna',
    surname: 'Nowak',
    age: 21,
    nationality: 'Poland',
    city: 'Warsaw',
    showInformation () {
        console.log(this.name, this.surname, this.age, this.nationality, this.city)
    },
    addAge () {
        this.age++
    },
}
person.favDishes = [];
person2.favDishes = [];
person.addDishes = function (dish) {
	this.favDishes.push(dish);
}
person2.addDishes = function (dish) {
	this.favDishes.push(dish);
}
person.addDishes('pizza');
person.addDishes('pasta');
person2.addDishes('sushi');
person2.addDishes('hot dog');
person.showDishes = function () {
	console.log(this.favDishes)
}
person2.showDishes = function () {
	console.log(this.favDishes)
}
person.showDishes();
person2.showDishes();

//zadanie 3

let calculator =  {
    a: 0,
    b: 0,
    numbers (a,b)  {
        this.a = a;
        this.b = b
    },
    adding () {
        console.log(this.a + this.b)
        return this.a + this.b 
    },
    substraction () {
        console.log(this.a - this.b)
        return this.a - this.b
    },
    dividing () {
        if (this.b == 0) {
            console.log('You cant divide if b = 0')
        }
        console.log(this.a / this.b)
        return this.a / this.b
    },
    multiplication () {
        console.log(this.a * this.b)
        return this.a * this.b
    },
}
calculator.numbers(2,4)
calculator.adding();
calculator.dividing();
calculator.substraction();
calculator.multiplication();

//zadanie 4

let ladder = {
    LadderStarStep: 0,
    //pierwsza metoda - wspinanie się po drabinie
    goUp() {
        this.LadderStarStep++
    },
    //druga metoda - schodzenie z drabiny
    goDown() {
        if (this.LadderStarStep === 0) {
            console.log('You are on the smallest step on ladder')
        }
        else {
            this.LadderStarStep--        
        }
    },
    //trzecia metoda - wyświetlanie aktualnego stopnia na drabinie
    showStep() {
        console.log("You are on " + this.LadderStarStep + " step")
    }
} 

ladder.goUp();
ladder.showStep();
ladder.goDown();
ladder.showStep();
ladder.goDown();
ladder.showStep();
ladder.goUp()
ladder.showStep();
ladder.goUp()
ladder.showStep();
ladder.goUp()
ladder.showStep();
