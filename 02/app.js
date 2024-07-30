
/* rozwiązanie z pętlą for */



let x = prompt("Podaj liczbę od 1 do 9:");

if (x < 1 || x > 9) {
    console.log("Proszę podać liczbę w zakresie od 1 do 9.");
} else {
    x = parseInt(x); // Konwertujemy wprowadzone dane na liczbę całkowitą
    for (let i = 1; i <= 9; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
}


let a = parseInt(prompt("Podaj podstawę (liczba całkowita):"));
let n = parseInt(prompt("Podaj wykładnik (liczba całkowita dodatnia):"));
let wynik = 1;
let operacje = "";

while (n > 0) {
    wynik *= a;
    operacje += (operacje ? " * " : "") + a;
    n--;
}

console.log(`${operacje} = ${wynik}`);


