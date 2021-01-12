//zadanie 1

//Zadanie 1.1

firstTask = document.getElementById('test-event')
firstTask.addEventListener('click', showContent => {
    console.log(showContent)
})

//Zadanie 1.2

document.addEventListener('mouseover', showAllContent => {
    console.log(showAllContent);
})

//zadanie 1.3

thirdTask = document.getElementById('test-event')
thirdTask.addEventListener('mouseover', showContent => {
    console.log(showContent)
})


zadanie 1.4

document.addEventListener('keypress', showContent => {
    console.log(showContent);
})

//zadanie 1.5

document.addEventListener('scroll', showContent => {
    console.log(showContent);
})

//zadanie 1.6

sixthTask = document.getElementById('input-test');
sixthTask.addEventListener('change', showContent => {
    console.log(showContent)
})

//zadanie 2

function xyz() {
    const buttonEx2 = document.getElementById('ex2')
    buttonEx2.addEventListener('click', enterText => {
        let dataText = enterText.target.dataset.text;
        let belowElement = enterText.target.nextElementSibling;
        
        belowElement.innerText = dataText
    })
}
xyz();

//zadanie 3

const square = document.querySelector('div#ex3')
square.addEventListener('mouseover', blueSquare =>{
    blueSquare.target.style.backgroundColor = '#0000ff'
})
square.addEventListener('mouseout', redSquare => {
    redSquare.target.style.backgroundColor = '#ff0000'
})

//zadanie 4

const ex3Err = document.getElementById("ex3-err");
const inputTest = document.getElementById("input-test")
inputTest.addEventListener("input", checkValue => {
    let newValue = "";
    let numbers = /[0-9]/
    const element = checkValue.target.value;
    if(numbers.test(element)){
        newValue = "You can't eneterd numbers here";
    } else {
        newValue = "";
    }

    ex3Err.innerHTML = newValue;
})

//zadanie 5

const divEx5 = document.getElementById('ex5');
const buttonEx5 = document.getElementById('ex5-button');
let numberOfClick = 0
buttonEx5.addEventListener('click', function counting() {
    numberOfClick++
    if(numberOfClick ==  10) {
        buttonEx5.removeEventListener('click', counting)
    }
    else {
        divEx5.innerHTML = numberOfClick
    }
})

//zadanie 6

document.addEventListener('scroll', bgcolor => {
    let valueTop = window.scrollY
    if (valueTop > 200) {
        document.body.style.backgroundColor = '#ff0000 '
    }
    if (valueTop < 200) {
        document.body.style.backgroundColor = "#ffffff"
    }
})

//zadanie 7

const calcButtons = document.querySelectorAll('#calculator div button')
const calcInput = document.querySelector('#calculator input');
let calcEval = false;
let calcClear = false;
calcButtons.forEach((button) => {
    button.addEventListener('click', e => {
        if (calcClear == true) {
            calcClear = false;
            calcInput.value = '';
        }
        calcInput.value = calcInput.value + e.target.innerText;
        if (calcEval == true) {
            calcEval = false;
            calcInput.value = eval(calcInput.value);
            calcClear = true;
        }
        if (['/', '*', '+', '-'].includes(e.target.innerText)) {
            calcEval = true;
        }
    }); 
});
