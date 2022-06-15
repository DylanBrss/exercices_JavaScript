// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
joeInfo.cars.length;
// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms = 1;
// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage = true;

var team = {
    _player: {
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11,
    },
    _games: {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27,
    },
};

function addplayer(first, last, age) {

    for (let i = 0; i < team._player.length; i++) {
        team._player.firstName = first;
        team._player.lastName = last;
        team._player.age = age;
    }
}
addplayer("Lionel", "Messi", 36);
addplayer("Marco", "Reus", 34);
addplayer("Karim", "Benzema", 30);
addplayer("Kinsley", "Coman", 26);


function addmatch(opponent, teamPoints, opponentPoints) {
    this.opponent = opponent;
    this.teamPoints = teamPoints;
    this.opponentPoints = opponentPoints;
}
team._games = new addmatch('Real Madrid', 35, 21);
team._games = new addmatch('FC Barcelone', 42, 14);
team._games = new addmatch('Borussia Dortmund', 51, 32);
team._games = new addmatch('Fc Bayern Munich', 28, 10);


console.log(team._player)