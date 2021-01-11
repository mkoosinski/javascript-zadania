//zadanie 1

const listElements = document.querySelectorAll('.list')

//zadanie 2

const xyz = function (element) {
    console.log(document.querySelector(element.tagName))
    return document.querySelector(element.tagName) 
}

xyz(document.getElementById('spans'))

//zadanie 3

const listValue = document.querySelector('#list')
console.log(listValue)

//zadanie 4

function xyz (elementValue) {
    console.log(elementValue)
}
xyz(document.getElementsByTagName('li'))
xyz(document.getElementsByTagName('ul'))
xyz(document.getElementsByTagName('span'))
xyz(document.querySelectorAll('.list span'))
xyz(document.querySelectorAll(' #spans span'))
