//zadanie 1 

const buz = document.querySelectorAll('#buz');
const baz = document.querySelectorAll('#baz');
const foo = document.querySelectorAll('#foo')
console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log (foo.parentNode)
console.log (foo.firstChild)
console.log (foo.childrenElement[Math.round(foo.children.length/2)])

//zadanie 2

function xyz (firstElement) {
    secondElement = document.querySelector(firstElement)
    secondElement.addEventListener('click', function() {
    let divTxt = this.children[0].children[0].children[0].children[1].children[0].children[0];
    console.log(divTxt)
    })
}
xyz('#ex2');


//zadanie 3

function xyz(){
    const firstElement = document.getElementById('ex3');
    const secondElement = document.querySelectorAll('#ex3 button');    
    secondElement.forEach(thirdElement => {
        console.log(thirdElement)
        thirdElement.addEventListener('click', function() {
            if(thirdElement.nextElementSibling.style.display === 'none'){
                thirdElement.nextElementSibling.style.display='block';
            }else {
                thirdElement.nextElementSibling.style.display='none';
            }
            
        })
    })    
}

xyz();

//zadanie 4

const divElements = document.querySelectorAll('#ex3 button');
divElements.forEach((divFunc) => {
    divFunc.addEventListener('click', changeColor => {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    const parentColor = changeColor.target.parentElement
    parentColor.style.backgroundColor = randomColor;
    })
})

//zadanie 5

let liElements = document.querySelectorAll('div#ex5 ul li')
let divElements = document.querySelectorAll('div#ex5 div')

//5.1
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
        let divColor = event.target.style.backgroundColor
        liElements[0].style.backgroundColor = divColor;
    })
})
//5.2
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
        let divColor = event.target.style.backgroundColor
        liElements[liElements.length - 1].style.backgroundColor = divColor;
    })
})

//5.3
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    for(let i = 0; i>liElements.length; i++) {
        if(i % 2 == 1) {
            liElements[i].style.backgroundColor = divColor;
        }
    }
    })
})

//5.4
divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    for(let i = 0; i<liElements.length; i++) {   
    liElements[i].style.backgroundColor = divColor;
    }
    })
})


//5.5

divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    liElements[0].parentElement.style.backgroundColor = divColor
    })
})


//zadanie 6

//6.1
const firstTask = document.getElementById('ex6').firstElementChild.firstElementChild.firstElementChild
console.log(firstTask)
//6.2
const secondTask = document.getElementById('ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
console.log(secondTask);
//6.3
const thirdTask = document.getElementById('ex6').parentElement.firstElementChild.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild
console.log(thirdTask)


