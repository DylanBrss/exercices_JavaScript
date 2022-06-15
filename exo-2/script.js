// you can write js here
console.log('exo-2');

var InscriptionCourse = true; // variable Boolean
var ageCoureur = 10;
var raceNumber = Math.floor(Math.random()*1000);

if(InscriptionCourse = true){
    raceNumber;
};



if (ageCoureur >= 18 && InscriptionCourse == true) {
    console.log('You will race at 9:30 am');
} else if (ageCoureur >= 18 || InscriptionCourse == true) {
    console.log('You will race at 11:00 am with bib number ' + raceNumber);
} else if (ageCoureur < 18 && InscriptionCourse == false) {
    console.log('You will race at 12:30 pm with bib number ' + raceNumber);
}else {
    console.log('Go to see the registration desk')
}