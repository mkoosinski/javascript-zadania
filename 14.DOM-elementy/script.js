//zadanie 1

const divElements = document.querySelectorAll('.more-divs')
function xyz(divElements) {
    const tags = Array.from(divElements);
    return tags.map((properties) => properties.tagName);
}
console.log(xyz(divElements))

//zadanie 2

const listElements = document.querySelector('.short-list')
const secondTask = showProperties => {
    console.log(showProperties.innerHTML);
    console.log(showProperties.outerHTML);
    console.log(showProperties.className);
    console.log([showProperties.className]);
    console.log(showProperties.dataset);
}
secondTask(listElements)

//zadanie 3

const numbersDataset = document.getElementById('datasetCheck');
const addingAndSubstraction = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberone)
    const secondNumber = parseInt(takeNumbers.dataset.numbertwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber + secondNumber + thirdNumber;
    return [adding, substraction]
}
console.log(addingAndSubstraction(numbersDataset));

//zadanie 4

const changeContent = changetxt => {
    const changeSpan = document.getElementById('spanText')
    changeSpan.innerHTML = changetxt
}
changeContent('random text');

//zadanie 5

const changeClasses = changeClass => {
    const changeSpan = document.getElementById('spanText')
    changeSpan.className = changeClass
}
changeClasses('random class');

//zadanie 6

function xyz(classesValue) {
    classesValue.forEach((consoleName) => {
        console.log(consoleName);
    });
    console.log(Array.from(classesValue.values()).join('+'));
}
const elementClasslist = document.getElementById('classes').classList;
xyz(elementClasslist)

//zadanie 7

let longListElements = document.getElementById('longList')
let liElements = longListElements.querySelectorAll('li')
liElements.forEach((liDataset) => {
    if (liDataset.dataset.text == null) {
        liDataset.dataset.text = "text";    
    }
});

//zadanie 8

let newObject = (firstString) => {
    return {
        newClass: firstString
    }
}
const addClass = (secondString) => {
    const newClass = secondString.newClass;
    const div = document.getElementById('myDiv');
    div.classList.add(newClass);
}
const randomObject = newObject("string_z_parametru");
addClass(randomObject);

//zadanie 9

const numbers = document.getElementById('numbers');
const xyz = (randomNumber) => {
	if (randomNumber % 2 === 0) {
		numbers.className = 'even';
	} else {
		numbers.className = 'odd';
	}
};
xyz(Math.round(Math.random()*10));

//zadanie 10
 
let longListID = document.getElementById('longList');
function xyz(longListID) {
        let ArrWithLongListValue = [];
        const liElement = longListID.querySelectorAll('li')
        liElement.forEach((secondParam) => {
        ArrWithLongListValue.push(secondParam.innerText.trim());
    });
        return ArrWithLongListValue;
}
console.log(xyz(longListID))

//zadanie 11

const longList = document.getElementById('longList')
function changeValue (parent) {
    const liElements = parent.querySelectorAll('li')
    liElements.forEach(childElement => {
        childElement.dataset.previousNumber = childElement.innerText;
        childElement.innerText = Math.round(Math.random() * 10);
    })
}
changeValue(longList)

