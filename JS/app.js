// console.log('ciao')

/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
 per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

// prendiamo ul dal DOM
const ulElement = document.getElementById('lista')

//creiamo un ciclo che conti i numeri d 1 a 100
for (i = 0; i < 100; i++) {

    // creiamo una variabile che indichi a JS di partire dall'1
    let num = i + 1 // number

    // STAMPA IN CONSOLE

    // se i % 3 => 'Fizz'
    if (num % 15 == 0) {
        console.log('FizzBuzz') // string
    }
    // altrimenti se i % 5 => 'Buzz'
    else if (num % 5 == 0) {
        console.log('Buzz') // string
    }
    // altrimenti se i % 15 => 'FizzBuzz'
    else if (num % 3 == 0) {
        console.log('Fizz') // string
    }
    // altrimenti => num
    else {
        console.log(num)
    }

    // STAMPA IN HTML 

    // se i % 3 => 'Fizz'
    if (num % 15 == 0) {
        ulElement.innerHTML = ulElement.innerHTML + '<li> FizzBuzz </li>'
    }
    // se i % 5 => 'Buzz'
    else if (num % 5 == 0) {
        ulElement.innerHTML = ulElement.innerHTML + '<li> Buzz </li>'
    }
    // se i % 15 => 'FizzBuzz'
    else if (num % 3 == 0) {
        ulElement.innerHTML = ulElement.innerHTML + '<li> Fizz </li>'
    }
    else {
        ulElement.innerHTML = ulElement.innerHTML + '<li>' + num + '</li>'

    }
}