// you can write js here
console.log('hello from file');

var kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?"); // création d'une variable kelvin qui prend en valeur 294
var celsius = kelvin - 273; // création d'une variable celcius qui prend en valeur formule pour convertir des kelvin en celsius
var fahrenheit = Math.floor(celsius * (9/5) + 32); // création d'une variable fahrenheit qui prend en valeur la fourmule pour convertir des celsius en fahrenheit
                                              // la méthode floor permet d'arrondir le résultat de la variable fahrenheit
 
console.log(celsius); // affichage du résultat de la variable
console.log(fahrenheit); // affichage du résultat de la variable