// console.log('ciao')

/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
 per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

//creiamo un ciclo che conti i numeri d 1 a 100
for (i = 0; i < 100; i++) {

    // creiamo una variabile che indichi a JS di partire dall'1
    let num = i + 1 // number
    // stampo num
    console.log(num) // number

    // let resto = num % 3
    let resto3 = num % 3 // number
    // let resto = num % 5
    let resto5 = num % 5 // number
    // let resto = num % 15
    let resto15 = num % 15 // number

    // se i % 3 => 'Fizz'
    if (resto15 == 0) {
        console.log(num + 'FizzBuzz') // string
    }
    // se i % 5 => 'Buzz'
    else if (resto5 == 0) {
        console.log(num + 'Buzz') // string
    }
    // se i % 15 => 'FizzBuzz'
    else if (resto3 == 0) {
        console.log(num + 'Fizz') // string
    }
}