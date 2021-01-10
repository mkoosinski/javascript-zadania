//zadanie 5
//W konsoli napisz program, który na podstawie wartości zmiennej np. var n = 5; wypisuje wszystkie liczby od zera do n. 
//Przy każdej liczbie program ma napisać, czy liczba jest parzysta czy nie. Np.:
 
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
//W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj: konkatenację np.

for (i = 0; i <= 3; i++) {
    for (j = 0; j <= 4; j++) {
        console.log("i= " + i + ", j= " + j);
    }
} 

//zadanie 7
//FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz", zamiast każdej podzielnej liczby przez 5 wypisz "Buzz" a zamiast 
//każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"

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
