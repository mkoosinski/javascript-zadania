// zadanie 1 

let firstNumber = 1
let secondNumber = 2

if(firstNumber>secondNumber) {
  console.log(firstNumber)
}
else {
  console.log(secondNumber)
}

//zadanie 2

let firstNumber = 1
let secondNumber = 2
let thirdNumber = 3

if(firstNumber>secondNumber && firstNumber>thirdNumber) {
  console.log(firstNumber)
}
else if (secondNumber > firstNumber && secondNumber> thirdNumber) {
  console.log(secondNumber)
}
else{
  console.log(thirdNumber)
}

//zadanie 3

for(let i = 0; i < 10; i++) {
  console.log('Lubie JavaScript')
}

//zadanie 4 

let result = 0

for(let i = 0; i<=10; i++) {
  result = result + i
}
console.log(result)

//zadanie 5

let value = 10;
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i + " parzysta");
    }
    else {
        console.log(i + " nieparzysta");
    }
}

//zadanie 6 

for (i = 0; i <= 3; i++) {
    for (j = 0; j <= 4; j++) {
        console.log("i= " + i + ", j= " + j);
    }
} 

//zadanie 7

for (let i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else {
        console.log(i);
    }
}
