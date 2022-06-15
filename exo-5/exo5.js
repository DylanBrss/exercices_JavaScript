// you can write js here
console.log('exo-5');

var input = "Soixante rebelles s'incrustent sous terre.";
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var resultArray = [];
var i = 0;

for (i = 0; i < input.length; i++) {
    //console.log(input);
    vowels.indexOf(input[i]);

    if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u' || input[i] == 'y') {
        resultArray.push(input[i]);
    }
}

console.log(resultArray.join('').toUpperCase());