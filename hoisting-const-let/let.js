var residencia1 = 5;
var residencia2 = 10;

if (residencia1 === 5) {
    let residencia1 = 4; // O escopo é dentro do bloco if
    let residencia3 = 41; // O escopo é dentro do bloco if
    var residencia2 = 1; // O escopo é dentro da função

    console.log(residencia1); // 4
    console.log(residencia2); // 1
    console.log(residencia3); // 41
}

console.log(residencia1); // 5
console.log(residencia2); // 1
console.log(residencia3); // vai dar erro